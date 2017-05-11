import React, { Component } from 'react';
import './App.css';

import PostModal from './PostModal';
import PostsGroup from './PostsGroup';

import posts from './resources/posts.json';


class App extends Component {
  constructor(props) {
    super(props);

    const {date, group} =  props.match.params;
    
    let currentPost = null;    
    
    if (date && group) {
      posts[group].posts.forEach((post) => {
        if (post.date === date) {
          currentPost = post;
        }
      });
    }

    this.state = {
      group: group || null,
      currentPost,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(postInfo, group) {
    this.setState({
      group,
      currentPost: postInfo,
    });
  }

  closeModal() {
    this.setState({
      group: null,
      currentPost: null,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>2017 Worldwide Trip</h2>
        </div>

        <PostModal
          isOpen={this.state.currentPost !== null}
          onRequestClose={this.closeModal}
          postInfo={this.state.currentPost}
          group={this.state.group}
        />

        <PostsGroup group="orlando" openModal={this.openModal} />
      </div>
    );
  }
}

export default App;
