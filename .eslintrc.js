module.exports = {
  root: true,
  extends: ["airbnb"],
  parser: "babel-eslint",
  env: {
    browser: true
  },
  rules: {
    "no-shadow": 0,
    "max-len": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 2,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "consistent-return": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
  }
};
