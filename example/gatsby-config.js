require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: '@mmintel/indiegram',
      options: {
        apiKey: process.env.DATOCMS_API_KEY,
      },
    },
  ],
};
