import _ from 'lodash';
import removeMarkdown from 'remove-markdown';

import posts from '../src/resources/posts.json' with {type: 'json'};

let postCount = posts.length;
let wordCount = 0;
let characterCount = 0;

_.forEach(posts, (post) => {
  const str = removeMarkdown(post.text).replace(/&mdash;/g, '-');

  var tokens = _.filter(str.split(' '), (token) => {
    return token !== '-';
  });

  if (tokens.length > 100) {
    console.log(`[ERROR] Post dated ${post.id} has ${tokens.length} words: "${str}"`);
  }

  wordCount += tokens.length;
  characterCount += str.length;
});

console.log('Posts:', postCount);
console.log('Words:', wordCount);
console.log('Characters:', characterCount);
