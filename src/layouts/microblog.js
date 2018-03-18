import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Link from 'gatsby-link';

import LocationArchive from '../components/microblog/LocationArchive/';

const Header = styled.div`
  background-color: #3085a3;
  text-align: center;
  padding: 25px;

  & > a {
    color: #c6d7c7;
    font-size: 60px;
    font-family: 'Alegreya Sans SC';
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 1100px) {
      font-size: 44px;
    }

    @media (max-width: 700px) {
      font-size: 36px;
    }
  }
`;

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
        <Header>
          <Link to="/microblog/">Worldwide Trip Microblog</Link>
        </Header>
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
