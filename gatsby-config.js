module.exports = {
  siteMetadata: {
    title: `Jacob Wenger's Personal Site`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Jacob Wenger's Personal Website`,
        short_name: 'Jacob Wenger',
        description: 'Jacob Wenger is an entrepreneur and experience builder.',
        start_url: '/',
        display: 'browser',
        theme_color: '#C6D7C7',
        background_color: '#C6D7C7',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-98941028-1',
        head: false,
      },
    },
  ],
};
