import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

interface MicroblogPost {
  locations___NODE: string | null;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsPath = path.resolve(__dirname, '../src/resources/posts.json');

const padNumber = (num: number): string => {
  if (num < 10) {
    return `00${num}`;
  }

  if (num < 100) {
    return `0${num}`;
  }

  return String(num);
};

const main = async (): Promise<void> => {
  const posts = JSON.parse(await readFile(postsPath, 'utf8')) as MicroblogPost[];

  let previousLocation: string | null = null;
  let previousLocationPostCount = 0;

  for (const [index, post] of posts.entries()) {
    if (post.locations___NODE === previousLocation) {
      previousLocationPostCount++;
      continue;
    }

    if (previousLocation !== null) {
      console.log(
        `${previousLocation}: ${padNumber(index + 1 - previousLocationPostCount)} - ${padNumber(index)}`
      );
    }

    previousLocation = post.locations___NODE;
    previousLocationPostCount = 1;
  }

  if (previousLocation !== null) {
    console.log(
      `${previousLocation}: ${padNumber(posts.length + 1 - previousLocationPostCount)} - ${padNumber(posts.length)}`
    );
  }
};

await main().catch((error: unknown) => {
  console.error(`Failed to generate post table of contents from ${postsPath}:`, error);
  process.exit(1);
});
