import {access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.argv.length !== 3) {
  console.log('[ERROR] Filename to resize must be provided.');
  console.log('[INFO] Usage: npx tsx scripts/resizeImage.ts <filename>');
  process.exit(1);
}

const sourceImagesDir = path.resolve(__dirname, './originals');
const targetImagesDir = path.resolve(__dirname, '../src/images/microblog/posts');
const sourceImageFilename = process.argv[2];
const sourceImagePath = path.resolve(sourceImagesDir, sourceImageFilename);

const resizeAndCompress = async (
  source: string,
  target: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    await sharp(source)
      .resize(width, height)
      .jpeg({mozjpeg: true, quality: 80})
      .toFile(target);

    console.log(`Successfully resized and compressed ${source} to ${target}.`);
  } catch (error) {
    console.log(`Error resizing and compressing ${source} to ${target}:`, error);
    process.exitCode = 1;
  }
};

const main = async (): Promise<void> => {
  await access(sourceImagePath);

  await Promise.all([
    resizeAndCompress(
      sourceImagePath,
      path.resolve(targetImagesDir, sourceImageFilename),
      512,
      512
    ),
    resizeAndCompress(
      sourceImagePath,
      path.resolve(
        targetImagesDir,
        `${path.parse(sourceImageFilename).name}-thumbnail.jpg`
      ),
      200,
      200
    ),
  ]);
};

await main().catch((error: unknown) => {
  console.error('Failed to resize image:', error);
  process.exit(1);
});
