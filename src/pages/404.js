import React from 'react';
import Link from 'gatsby-link';

import './404.css';

const NotFoundPage = () => (
  <div className="four-oh-four">
    <h1>Page Not Found</h1>
    <p>
      <Link to="/">Take me home</Link>
    </p>
  </div>
);

export default NotFoundPage;
