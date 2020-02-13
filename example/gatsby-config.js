require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: '@mmintel/gatsby-theme-indiegram',
      options: {
        apiKey: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
