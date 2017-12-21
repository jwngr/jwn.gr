import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import './index.css';

import PostsCarousel from './PostsCarousel';
import LocationPosts from './LocationPosts';
import LocationArchive from './LocationArchive';


class Microblog extends Component {
  componentWillReceiveProps(nextProps) {
    // Scroll to the top of the page on route transitions
    window.scrollTo(0, 0);
  }

  render() {
    const {match} = this.props;

    return (
      <div>
        <a className='subscribe-button' href='https://jwn.us15.list-manage.com/subscribe/post?u=d19fa80c86cc4e9017baf4f4b&id=46d31d866a'>Subscribe</a>

        <div className='header'>
          <Link to={match.url}>Worldwide Trip Microblog</Link>
        </div>

        <Route exact path={`${match.url}/:dateKey?`} component={PostsCarousel} />
        <Route exact path={`${match.url}/locations/:locationId?`} component={LocationPosts} />

        <LocationArchive />
      </div>
    );
  }
}

export default Microblog;
