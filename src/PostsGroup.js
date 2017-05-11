import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import posts from './resources/posts.json';

import './PostsGroup.css';

class PostsGroup extends Component {
  render() {
    const images = [];

    const groupInfo = posts[this.props.group];

    groupInfo.posts.forEach(post => {
      images.push(
        <Link to={`${this.props.group}/${post.date}`} key={post.date}>
          <img
            alt={post.date}
            src={require(`./images/posts/${post.date}.jpg`)}
            onClick={this.props.openModal.bind(null, post, this.props.group)} />
        </Link>
      );
    });

    return (
      <div>
        <p className="groupName">{groupInfo.location}</p>
        <div className="groupStats">
          <p>{groupInfo.posts.length} days</p>
          <p className="separator">|</p>
          <p>Unlimited experiences</p>
        </div>
        <div className="imagesContainer">
          {images}
        </div>
      </div>
    );
  }
}

export default PostsGroup;
