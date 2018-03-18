import React from 'react';

import './index.css';

import Post from '../../../components/microblog/Post/';

import {getDateRange} from '../../../components/microblog/utils';

export default ({data}) => {
  const {id: locationId, name: locationName, posts} = data.locationsJson;

  const postsCount = posts.length;
  const postOrPosts = postsCount === 1 ? 'post' : 'posts';

  let dateRange = getDateRange(posts[0].id, posts[postsCount - 1].id);

  const postsContent = posts.map((post) => {
    return (
      <Post
        id={post.id}
        text={post.text}
        locationId={locationId}
        locationName={locationName}
        includeDateLink={true}
        includeLocationLink={false}
        key={post.id}
      />
    );
  });

  return (
    <div className="location-posts">
      <div className="location-posts-header">
        <p className="location-posts-header-name">{locationName}</p>
        <p className="location-posts-header-date-range">{dateRange}</p>
        <p className="location-posts-header-posts-count">
          {postsCount} {postOrPosts}
        </p>
      </div>

      {postsContent}
    </div>
  );
};

export const query = graphql`
  query LocationQuery($id: String!) {
    locationsJson(id: {eq: $id}) {
      id
      name
      posts {
        id
        text
      }
    }
  }
`;
