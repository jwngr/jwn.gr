import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import _ from 'lodash';
import removeMarkdown from 'remove-markdown';

interface MicroblogPost {
  id: string;
  text: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsPath = path.resolve(__dirname, '../src/resources/posts.json');

const main = async (): Promise<void> => {
  const posts = JSON.parse(await readFile(postsPath, 'utf8')) as MicroblogPost[];

  let wordCount = 0;
  let characterCount = 0;

  _.forEach(posts, (post: MicroblogPost) => {
    const str = removeMarkdown(post.text).replace(/&mdash;/g, '-');

    const tokens = _.filter(str.split(' '), (token: string) => {
      return token !== '-';
    });

    if (tokens.length > 100) {
      console.log(`[ERROR] Post dated ${post.id} has ${tokens.length} words: "${str}"`);
    }

    wordCount += tokens.length;
    characterCount += str.length;
  });

  console.log('Posts:', posts.length);
  console.log('Words:', wordCount);
  console.log('Characters:', characterCount);
};

await main().catch((error: unknown) => {
  console.error(`Failed to calculate microblog stats from ${postsPath}:`, error);
  process.exit(1);
});
