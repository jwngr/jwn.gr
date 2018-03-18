import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ReactMarkdown from 'react-markdown';

import './index.css';

import {getFormattedDate} from '../utils';

const Post = ({id, text, locationId, locationName, includeDateLink, includeLocationLink}) => {
  let dateContent;
  if (includeDateLink) {
    dateContent = (
      <p className="post-date">
        <Link to={`/microblog/${id}`}>{getFormattedDate(id)}</Link>
      </p>
    );
  } else {
    dateContent = <p className="post-date post-date-red">{getFormattedDate(id)}</p>;
  }

  let locationContent;
  if (includeLocationLink) {
    locationContent = (
      <p className="post-location">
        <Link to={`/microblog/locations/${locationId}`}>{locationName}</Link>
      </p>
    );
  } else {
    locationContent = <p className="post-location">{locationName}</p>;
  }

  const postImage = <img alt={id} src={require(`../../../images/microblog/posts/${id}.jpg`)} />;
  const postText = <ReactMarkdown className="post-text" source={text} />;

  return (
    <div className="post">
      <MediaQuery maxWidth={750}>
        {dateContent}
        {locationContent}
        {postImage}
        {postText}
      </MediaQuery>

      <MediaQuery minWidth={751} maxWidth={1000}>
        <div className="date-location-image-container">
          {dateContent}
          {locationContent}
          {postImage}
        </div>
        {postText}
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        {postImage}
        <div className="date-location-text-container">
          {dateContent}
          {locationContent}
          {postText}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Post;
