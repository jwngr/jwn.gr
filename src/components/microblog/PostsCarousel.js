import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import './PostsCarousel.css';

import Post from './Post';

import posts from '../../resources/posts.json';
import {
  getNextDateKey,
  getPreviousDateKey,
  getShortFormattedDate,
  getImageKeyFromDate,
} from './utils';

const PostsCarousel = ({match}) => {
  let {dateKey} = match.params;

  let date;
  if (typeof dateKey === 'undefined') {
    date = new Date();
  } else {
    date = new Date(dateKey);
  }

  let i = 0;
  while (!(dateKey in posts.posts)) {
    date.setDate(date.getDate() - 1);
    dateKey = getImageKeyFromDate(date);
    i++;
    if (i > 100) {
      date = Date.now();
      // TODO: loop until the latest post
    }
  }

  let nextDateLink;
  let nextDateKey = getNextDateKey(dateKey);
  if (nextDateKey in posts.posts) {
    nextDateLink = (
      <Link className="next-post-link" to={`/microblog/${nextDateKey}`}>
        <img alt={nextDateKey} src={require(`../../images/microblog/posts/${nextDateKey}.jpg`)} />
        <div className="next-post-date-container">
          <p>{getShortFormattedDate(nextDateKey)}</p>
        </div>
      </Link>
    );
  } else {
    nextDateLink = <div className="empty-post-link" />;
  }

  let previousDateLink;
  let previousDateKey = getPreviousDateKey(dateKey);
  if (previousDateKey in posts.posts) {
    previousDateLink = (
      <Link className="previous-post-link" to={`/microblog/${previousDateKey}`}>
        <img
          alt={previousDateKey}
          src={require(`../../images/microblog/posts/${previousDateKey}.jpg`)}
        />
        <div className="previous-post-date-container">
          <p>{getShortFormattedDate(previousDateKey)}</p>
        </div>
      </Link>
    );
  } else {
    previousDateLink = <div className="empty-post-link" />;
  }

  return (
    <div className="post-carousel">
      <MediaQuery maxWidth={750}>
        <Post dateKey={dateKey} includeLocationLink={true} />

        <div className="next-and-previous-post-links">
          {previousDateLink}
          {nextDateLink}
        </div>
      </MediaQuery>

      <MediaQuery minWidth={751}>
        {previousDateLink}

        <Post dateKey={dateKey} includeLocationLink={true} />

        {nextDateLink}
      </MediaQuery>
    </div>
  );
};

export default PostsCarousel;
