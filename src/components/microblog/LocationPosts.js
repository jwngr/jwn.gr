import React from 'react';

import './LocationPosts.css';

import Post from './Post';

import {getDateRange} from './utils';
import posts from './resources/posts.json';


const LocationPosts = ({match}) => {
  const location = posts.locations[match.params.locationId];

  const postsCount = location.posts.length;
  const postOrPosts = (postsCount === 1) ? 'post' : 'posts';

  let dateRange = getDateRange(location.posts[0], location.posts[postsCount - 1]);

  const postsContent = location.posts.map((postDateKey) => {
    return <Post dateKey={postDateKey} key={postDateKey} includeDateLink={true} />;
  });

  return (
    <div className='location-posts'>
      <div className='location-posts-header'>
        <p className='location-posts-header-name'>{location.name}</p>
        <p className='location-posts-header-date-range'>{dateRange}</p>
        <p className='location-posts-header-posts-count'>{postsCount} {postOrPosts}</p>
      </div>

      {postsContent}
    </div>
  );
};

export default LocationPosts;
