import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

import {getDateRange} from '../utils';

const LocationArchiveItem = ({id, name, postIds}) => {
  const shortLocationName = name.split(',')[0];
  const postsCount = postIds.length;
  const postOrPosts = postsCount === 1 ? 'post' : 'posts';

  let dateRange = getDateRange(postIds[0], postIds[postsCount - 1]);

  let imagePostIds;
  if (postsCount === 1) {
    imagePostIds = [postIds[0]];
  } else if (postsCount === 2) {
    imagePostIds = [postIds[0], postIds[1]];
  } else {
    imagePostIds = [postIds[0], postIds[1], postIds[2]];
  }

  const images = [];
  imagePostIds.forEach((postId) => {
    images.push(
      <img
        className={`archive-item-image archive-item-image-${imagePostIds.length}`}
        key={postId}
        alt={postId}
        src={require(`../../../images/microblog/posts/${postId}-thumbnail.jpg`)}
      />
    );
  });

  return (
    <Link className="archive-item" to={`/microblog/locations/${id}`}>
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
