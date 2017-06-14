import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Home from './components/home';
import Microblog from './components/microblog';


// Load fonts
require('typeface-alegreya');
require('typeface-alegreya-sans-sc');


const RouterContainer = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/microblog' component={Microblog} />
    </div>
  </Router>
);

ReactDOM.render(
  <RouterContainer />,
  document.getElementById('root')
);
