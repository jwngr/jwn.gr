import React from 'react';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';

import Link from 'gatsby-link';

import LocationArchive from '../components/microblog/LocationArchive/';

// TODO: fix super-hack which inlines the header CSS because otherwise the CSS is not properly
//       cached by gatsby-plugin-offline?!? Will probably be fixed in Gatsby v2...
const headerStyles = {
  backgroundColor: '#3085a3',
  textAlign: 'center',
  padding: '25px',
};

const linkStyles = {
  color: '#c6d7c7',
  fontSize: '60px',
  fontFamily: 'Alegreya Sans SC',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const mediumLinkStyles = Object.assign({}, linkStyles, {fontSize: '44px'});
const smallLinkStyles = Object.assign({}, linkStyles, {fontSize: '36px'});

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
      <React.Fragment>
        <Helmet
          title="Worldwide Trip Microblog | Jacob Wenger"
          meta={[
            {name: 'description', content: `Microblog of Jacob Wenger's 2017-18 worldwide trip`},
          ]}
        />
        <div style={headerStyles}>
          <MediaQuery minWidth={1101}>
            <Link to="/microblog/" style={linkStyles}>
              Worldwide Trip Microblog
            </Link>
          </MediaQuery>
          <MediaQuery minWidth={701} maxWidth={1100}>
            <Link to="/microblog/" style={mediumLinkStyles}>
              Worldwide Trip Microblog
            </Link>
          </MediaQuery>
          <MediaQuery maxWidth={700}>
            <Link to="/microblog/" style={smallLinkStyles}>
              Worldwide Trip Microblog
            </Link>
          </MediaQuery>
        </div>
        {children()}
        <LocationArchive locations={locations} />
      </React.Fragment>
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
