const _ = require('lodash');
const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allLocationsJson {
          edges {
            node {
              id
            }
          }
        }
        allPostsJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(({data}) => {
      const {allPostsJson, allLocationsJson} = data;

      const postCarouselTemplate = path.resolve(`./src/templates/microblog/PostCarousel/index.js`);
      const locationPostsTemplate = path.resolve(
        `./src/templates/microblog/LocationPosts/index.js`
      );

      // Create main microblog page
      createPage({
        path: `/microblog/`,
        layout: 'microblog',
        component: postCarouselTemplate,
        context: {
          id: _.last(allPostsJson.edges).node.id,
        },
      });

      // Create location pages
      allLocationsJson.edges.forEach(({node}) => {
        createPage({
          path: `/microblog/locations/${node.id}`,
          layout: 'microblog',
          component: locationPostsTemplate,
          context: {
            id: node.id,
          },
        });
      });

      // Create individual post pages
      allPostsJson.edges.forEach(({node}) => {
        createPage({
          path: `/microblog/${node.id}`,
          layout: 'microblog',
          component: postCarouselTemplate,
          context: {
            id: node.id,
          },
        });
      });

      resolve();
    });
  });
};
