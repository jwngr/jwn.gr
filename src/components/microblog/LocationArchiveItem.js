import React from 'react';
import {Link} from 'react-router-dom';

import './LocationArchiveItem.css';

import {getDateRange} from './utils';
import posts from './resources/posts.json';

const LocationArchiveItem = ({locationId}) => {
  const location = posts.locations[locationId];

  const shortLocationName = location.name.split(',')[0];
  const postsCount = location.posts.length;
  const postOrPosts = postsCount === 1 ? 'post' : 'posts';

  let dateRange = getDateRange(location.posts[0], location.posts[postsCount - 1]);

  let imagePostKeys;
  if (postsCount === 1) {
    imagePostKeys = [location.posts[0]];
  } else if (postsCount === 2) {
    imagePostKeys = [location.posts[0], location.posts[1]];
  } else {
    imagePostKeys = [location.posts[0], location.posts[1], location.posts[2]];
  }

  const images = [];
  imagePostKeys.forEach((postKey) => {
    images.push(
      <img
        className={`archive-item-image archive-item-image-${imagePostKeys.length}`}
        key={postKey}
        alt={postKey}
        src={require(`../../images/microblog/posts/${postKey}-thumbnail.jpg`)}
      />
    );
  });

  return (
    <Link className="archive-item" to={`/microblog/locations/${locationId}`}>
      <p className="archive-item-location">{shortLocationName}</p>
      <p className="archive-item-date-range">{dateRange}</p>
      <p className="archive-item-posts-count">
        {postsCount} {postOrPosts}
      </p>
      <div className="archive-item-image-stack">{images}</div>
    </Link>
  );
};

export default LocationArchiveItem;
