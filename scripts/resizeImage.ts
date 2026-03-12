import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import sharp from 'sharp';
import tinify from 'tinify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.resolve(__dirname, '../config.json');

if (process.argv.length !== 3) {
  console.log('[ERROR] Filename to resize and compress must be provided.');
  console.log('[INFO] Usage: npx tsx scripts/resizeImage.ts <filename>');
  process.exit(1);
}

const sourceImagesDir = path.resolve(__dirname, './originals');
const targetImagesDir = path.resolve(__dirname, '../src/images/microblog/posts');

const sourceImageFilename = process.argv[2];
const sourceImagePath = `${sourceImagesDir}/${sourceImageFilename}`;

// Create full-sized image
const main = async (): Promise<void> => {
  tinify.key = await loadTinifyApiKey();

  await Promise.all([
    resizeAndCompress(sourceImagePath, `${targetImagesDir}/${sourceImageFilename}`, 512, 512),
    resizeAndCompress(
      sourceImagePath,
      `${targetImagesDir}/${sourceImageFilename.split('.')[0]}-thumbnail.jpg`,
      200,
      200
    ),
  ]);
};

/**
 * Resizes and compresses a source image, saving it at the target file path.
 *
 * @param source Full file path to source image.
 * @param target Full file path to the target image.
 * @param width Width of the target image.
 * @param height Height of the target image.
 */
async function resizeAndCompress(
  source: string,
  target: string,
  width: number,
  height: number
): Promise<void> {
  try {
    const data = await sharp(source).resize(width, height).toBuffer();

    await new Promise<void>((resolve, reject) => {
      tinify.fromBuffer(data).toFile(target, (error: unknown) => {
        if (error !== null) {
          reject(error);
          return;
        }

        console.log(`Successfully resized and compressed ${source} to ${target}!`);
        resolve();
      });
    });
  } catch (error) {
    console.log(`Error resizing and compressing ${source} to ${target}:`, error);
    throw error;
  }
}

async function loadTinifyApiKey(): Promise<string> {
  const apiKey = process.env.TINIFY_API_KEY;

  if (apiKey !== undefined && apiKey.length > 0) {
    return apiKey;
  }

  try {
    const config = JSON.parse(await readFile(configPath, 'utf8')) as {tinifyApiKey?: string};

    if (config.tinifyApiKey !== undefined && config.tinifyApiKey.length > 0) {
      return config.tinifyApiKey;
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }

  throw new Error(`Missing Tinify API key. Set TINIFY_API_KEY or add ${configPath}.`);
}

await main().catch((error: unknown) => {
  console.error('Failed to resize image:', error);
  process.exit(1);
});
