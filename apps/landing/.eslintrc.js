/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@configs/eslint/next.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  }
};
