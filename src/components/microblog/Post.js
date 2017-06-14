import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import ReactMarkdown from 'react-markdown';

import './Post.css';

import {getFormattedDate} from './utils';
import posts from './resources/posts.json';


const Post = ({match, dateKey, includeDateLink, includeLocationLink}) => {
  const {locationId, text} = posts.posts[dateKey];
  const location = posts.locations[locationId].name;

  let dateContent;
  if (includeDateLink) {
    dateContent = (
      <p className='post-date' >
        <Link to={`/microblog/${dateKey}`}>
          {getFormattedDate(dateKey)}
        </Link>
      </p>
    );
  } else {
    dateContent = (
      <p className='post-date post-date-red' >
        {getFormattedDate(dateKey)}
      </p>
    );
  }

  let locationContent;
  if (includeLocationLink) {
    locationContent = (
      <p className='post-location'>
        <Link to={`/microblog/locations/${locationId}`}>
          {location}
        </Link>
      </p>
    );
  } else {
    locationContent = (
      <p className='post-location'>
        {location}
      </p>
    );
  }

  return (
    <div className='post'>
      <MediaQuery maxWidth={750}>
        {dateContent}
        {locationContent}
        <img
          alt={dateKey}
          src={require(`../../images/microblog/posts/${dateKey}.jpg`)}
        />
        <ReactMarkdown className='post-text' source={text} />
      </MediaQuery>

      <MediaQuery minWidth={751} maxWidth={1000}>
        <div className='date-location-image-container'>
          {dateContent}
          {locationContent}
          <img
            alt={dateKey}
            src={require(`../../images/microblog/posts/${dateKey}.jpg`)}
          />
        </div>
        <div className='image-and-text-container'>
          <ReactMarkdown className='post-text' source={text} />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1001}>
        <img
          alt={dateKey}
          src={require(`../../images/microblog/posts/${dateKey}.jpg`)}
        />
        <div className='date-location-text-container'>
          {dateContent}
          {locationContent}
          <ReactMarkdown className='post-text' source={text} />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Post;
