module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['bundle.js', 'dist/**/*', 'webpack.config.js'],
  rules: {
  },
};
