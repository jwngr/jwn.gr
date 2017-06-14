const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const tinify = require('tinify');

const config = require('../config.json');
tinify.key = config.tinifyApiKey;

if (process.argv.length !== 3) {
  console.log('[ERROR] Filename to resize and compress must be provided.');
  console.log('[INFO] Usage: node resizeImage.js <filename>');
  process.exit(1);
}

const sourceImagesDir = path.resolve(__dirname, './originals');
const targetImagesDir = path.resolve(__dirname, '../src/images/microblog/posts');

const sourceImageFilename = process.argv[2];
const sourceImagePath = `${sourceImagesDir}/${sourceImageFilename}`;

// Create full-sized image
resizeAndCompress(
  sourceImagePath,
  `${targetImagesDir}/${sourceImageFilename}`,
  512,
  512
);

// Create thumbnail
resizeAndCompress(
  sourceImagePath,
  `${targetImagesDir}/${sourceImageFilename.split('.')[0]}-thumbnail.jpg`,
  200,
  200
);


/**
 * Resizes and compresses a source image, saving it at the target file path.
 *
 * @param {string} source Full file path to source image.
 * @param {string} target Full file path to the target image.
 * @param {number} width Width of the target image.
 * @param {number} height Height of the target image.
 */
function resizeAndCompress(source, target, width, height) {
  sharp(source)
    .resize(width, height)
    .toBuffer()
    .then((data) => {
      tinify.fromBuffer(data).toFile(target, function(error) {
        if (error !== null) {
          throw error;
        } else {
          console.log(`Successfully resized and compressed ${source} to ${target}!`);
        }
      });
    })
    .catch((error) => {
      console.log(`Error resizing and compressing ${source} to ${target}:`, error);
    });
}
