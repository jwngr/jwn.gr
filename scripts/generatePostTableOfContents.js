const _ = require('lodash');

const posts = require('../src/resources/posts.json');

let previousLocation = null;
let previousLocationPostCount = 0;

const padNumber = (num) => {
  if (num < 10) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  } else {
    return num;
  }
};

_.forEach(posts, (post, i) => {
  if (post.locations___NODE === previousLocation) {
    previousLocationPostCount++;
  } else {
    if (previousLocation !== null) {
      console.log(
        `${previousLocation}: ${padNumber(i + 1 - previousLocationPostCount)} - ${padNumber(i)}`
      );
    }

    previousLocation = post.locations___NODE;
    previousLocationPostCount = 1;
  }
});

console.log(
  `${previousLocation}: ${padNumber(posts.length + 1 - previousLocationPostCount)} - ${padNumber(
    posts.length
  )}`
);
