module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-test', 'data-foo', /my-suffix-expression$/] }],
      ],
    },
  },
};
