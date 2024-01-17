// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@configs/eslint/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-refresh/only-export-components': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'crlf',
        useTabs: false,
        singleQuote: true,
        printWidth: 150,
        jsxSingleQuote: true
      }
    ]
  }
};
