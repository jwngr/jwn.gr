import React from 'react';

import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Post from '../../../components/microblog/Post/';

import {
  getNextDateId,
  getPreviousDateId,
  getShortFormattedDate,
} from '../../../components/microblog/utils';

import './index.css';

const START_DATE_ID = '2017-05-09';
const END_DATE_ID = '2018-02-13';

export default ({data}) => {
  const {id, text, locations: location} = data.postsJson;

  let nextDateLink;
  if (id !== END_DATE_ID) {
    let nextDateId = getNextDateId(id);
    nextDateLink = (
      <Link className="next-post-link" to={`/microblog/${nextDateId}`}>
        <img alt={nextDateId} src={require(`../../../images/microblog/posts/${nextDateId}.jpg`)} />
        <div className="next-post-date-container">
          <p>{getShortFormattedDate(nextDateId)}</p>
        </div>
      </Link>
    );
  } else {
    nextDateLink = <div className="empty-post-link" />;
  }

  let previousDateLink;
  if (id !== START_DATE_ID) {
    let previousDateId = getPreviousDateId(id);
    previousDateLink = (
      <Link className="previous-post-link" to={`/microblog/${previousDateId}`}>
        <img
          alt={previousDateId}
          src={require(`../../../images/microblog/posts/${previousDateId}.jpg`)}
        />
        <div className="previous-post-date-container">
          <p>{getShortFormattedDate(previousDateId)}</p>
        </div>
      </Link>
    );
  } else {
    previousDateLink = <div className="empty-post-link" />;
  }

  const postContent = (
    <Post
      id={id}
      text={text}
      locationId={location.id}
      locationName={location.name}
      includeDateLink={false}
      includeLocationLink={true}
    />
  );

  return (
    <div className="post-carousel">
      <MediaQuery maxWidth={750}>
        {postContent}
        <div className="next-and-previous-post-links">
          {previousDateLink}
          {nextDateLink}
        </div>
      </MediaQuery>

      <MediaQuery minWidth={751}>
        {previousDateLink}
        {postContent}
        {nextDateLink}
      </MediaQuery>
    </div>
  );
};

export const query = graphql`
  query PostQuery($id: String!) {
    postsJson(id: {eq: $id}) {
      id
      text
      locations {
        id
        name
      }
    }
  }
`;
