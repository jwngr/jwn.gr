import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Home from './components/home';


// Load fonts
require('typeface-alegreya');
require('typeface-alegreya-sans-sc');


const RouterContainer = () => (
  <Router>
    <Route exact path='/' component={Home}/>
  </Router>
);

ReactDOM.render(
  <RouterContainer />,
  document.getElementById('root')
);
