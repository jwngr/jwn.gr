import path from 'node:path';
import {fileURLToPath} from 'node:url';

import sharp from 'sharp';
import tinify from 'tinify';
import config from '../config.json' assert {type: 'json'};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

tinify.key = config.tinifyApiKey;

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
void resizeAndCompress(sourceImagePath, `${targetImagesDir}/${sourceImageFilename}`, 512, 512);

// Create thumbnail
void resizeAndCompress(
  sourceImagePath,
  `${targetImagesDir}/${sourceImageFilename.split('.')[0]}-thumbnail.jpg`,
  200,
  200
);

/**
 * Resizes and compresses a source image, saving it at the target file path.
 *
 * @param source Full file path to source image.
 * @param target Full file path to the target image.
 * @param width Width of the target image.
 * @param height Height of the target image.
 */
function resizeAndCompress(
  source: string,
  target: string,
  width: number,
  height: number
): Promise<void> {
  return sharp(source)
    .resize(width, height)
    .toBuffer()
    .then(
      (data) =>
        new Promise<void>((resolve, reject) => {
          tinify.fromBuffer(data).toFile(target, (error: unknown) => {
            if (error !== null) {
              reject(error);
              return;
            }

            console.log(`Successfully resized and compressed ${source} to ${target}!`);
            resolve();
          });
        })
    )
    .catch((error) => {
      console.log(`Error resizing and compressing ${source} to ${target}:`, error);
    });
}
