import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import './index.css';

const RouterContainer = () => (
  <Router>
    <div>
      <Route path="/:group?/:date?" component={App} />
    </div>
  </Router>
);

ReactDOM.render(
  <RouterContainer />,
  document.getElementById('root')
);
