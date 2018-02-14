import Loadable from 'react-loadable';
import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Loading from './Loading';

import './index.css';

const AsyncPostsCarousel = Loadable({
  loader: () => import('./PostsCarousel'),
  loading() {
    return <Loading text="Loading posts from across the world..." />;
  },
});

const AsyncLocationPosts = Loadable({
  loader: () => import('./LocationPosts'),
  loading(props) {
    return <Loading text="Loading posts from selected location..." />;
  },
});

const AsyncLocationArchive = Loadable({
  loader: () => import('./LocationArchive'),
  loading() {
    return null;
  },
});

class Microblog extends Component {
  componentWillReceiveProps(nextProps) {
    // Scroll to the top of the page on route transitions
    window.scrollTo(0, 0);
  }

  render() {
    const {match} = this.props;

    return (
      <div>
        <div className="header">
          <Link to={match.url}>Worldwide Trip Microblog</Link>
        </div>

        <Route exact path={`${match.url}/:dateKey?`} component={AsyncPostsCarousel} />
        <Route exact path={`${match.url}/locations/:locationId?`} component={AsyncLocationPosts} />
        <Route component={AsyncLocationArchive} />
      </div>
    );
  }
}

export default Microblog;
