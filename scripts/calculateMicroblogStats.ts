import _ from 'lodash';
import removeMarkdown from 'remove-markdown';

import postsData from '../src/resources/posts.json' with {type: 'json'};

interface MicroblogPost {
  id: string;
  text: string;
}

const posts = postsData as MicroblogPost[];

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
