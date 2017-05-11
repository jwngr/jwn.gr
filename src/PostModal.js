import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import posts from './resources/posts.json';
import months from './resources/months.json';

import Modal from 'react-modal';

import './PostModal.css';


class PostModal extends Component {
  render() {
    const {group, isOpen, postInfo, onRequestClose} = this.props;

    let modalContent;
    if (postInfo) {
      const {date, text} = postInfo;
      const {location} = posts[group];

      let [year, month, day] = date.split('-');
      day = parseInt(day, 10);
      month = parseInt(month, 10);

      modalContent = (
        <div className="modalContent">
          <div>
            <img
              alt={`${date}: ${location}`}
              src={require(`./images/posts/${date}.jpg`)}
            />
            <div>
              <div className="title">
                <p>{months[month]} {day}, {year}</p>
                <p className="titleSeparator">|</p>
                <p>{location}</p>
              </div>
              <div className="postInfo">
                {text}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (isOpen === false) {
      return <Redirect to="/" />;
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal"
        overlayClassName="modalOverlay"
        contentLabel="Modal"
      >
        {modalContent}
      </Modal>
    );
  }
}

export default PostModal;
