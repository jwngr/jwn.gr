import React from 'react';
import Helmet from 'react-helmet';

import Link from 'gatsby-link';

import LocationArchive from '../components/microblog/LocationArchive/';

import './microblog.css';

export default class MicroblogLayout extends React.Component {
  componentWillReceiveProps() {
    // Scroll to the top of the page on route transitions
    window.scrollTo(0, 0);
  }

  render() {
    const {data, children} = this.props;

    const locations = data.allLocationsJson.edges.map(({node}) => {
      const {posts, ...other} = node;

      const postIds = posts.map(({id}) => id);

      return {
        ...other,
        postIds,
      };
    });

    return (
      <div>
        <Helmet
          title="Worldwide Trip Microblog | Jacob Wenger"
          meta={[
            {name: 'description', content: `Microblog of Jacob Wenger's 2017-18 worldwide trip`},
          ]}
        />
        <div className="header">
          <Link to={'/microblog/'}>Worldwide Trip Microblog</Link>
        </div>
        {children()}
        <LocationArchive locations={locations} />
      </div>
    );
  }
}

export const query = graphql`
  query MicroblogPostsQuery {
    allLocationsJson {
      edges {
        node {
          id
          name
          posts {
            id
          }
        }
      }
    }
  }
`;
