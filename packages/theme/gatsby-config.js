const config = require('./config');

module.exports = (themeOptions) => {
  const options = { ...config, ...themeOptions };

  return {
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-plugin-svgr',
        options: {
          prettier: true,
          svgo: true,
        },
      },
      {
        resolve: 'gatsby-source-datocms',
        options: {
          apiToken: options.apiKey,
          previewMode: options.previewMode,
          disableLiveReload: false,
        },
      },
    ],
  };
};
