import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Microblog from './components/microblog';

// Load fonts
require('typeface-alegreya');
require('typeface-alegreya-sans-sc');

const AsyncHome = Loadable({
  loader: () => import('./components/home'),
  loading() {
    return null;
  },
});

const RouterContainer = () => (
  <Router>
    <div>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/microblog" component={Microblog} />
    </div>
  </Router>
);

ReactDOM.render(<RouterContainer />, document.getElementById('root'));

registerServiceWorker();
