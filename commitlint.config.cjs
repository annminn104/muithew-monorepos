// build: Changes that affect the build system or external dependencies. (example scopes: gulp, broccoli, npm)
// chore: Regular maintenance tasks, code refactoring, and other miscellaneous or non-functional changes.
// ci: Changes related to the Continuous Integration (CI) configuration and scripts. (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation changes, including both code comments and external documentation.
// feat: New features for the user or major changes to existing features.
// fix: Bug fixes or corrections to existing functionality.
// perf: Changes that improve the performance of the codebase.
// revert: Reverting a previous commit.
// style: Code style changes (e.g., formatting, indentation) that do not affect the code's behavior.
// test: Adding missing tests or correcting existing tests.
// translation: Changes related to translations or internationalization.
// security: Changes that address security vulnerabilities.
// changeset: Changes related to the management of changesets, which are a way to version and publish changes to a codebase.
// draft: Commits that are in a draft state and not yet ready to be included in the main codebase.

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Require a blank line before the commit message body
    'body-leading-blank': [1, 'always'],
    // Limit the maximum length of the commit message body lines to 100 characters
    'body-max-line-length': [2, 'always', 100],
    // Require a blank line before the footer (if present) of the commit message
    'footer-leading-blank': [1, 'always'],
    // Limit the maximum length of the footer lines to 100 characters
    'footer-max-line-length': [2, 'always', 100],
    // Limit the maximum length of the entire commit message to 100 characters
    'header-max-length': [2, 'always', 100],
    // Enforce lowercase for the scope in the commit message
    'scope-case': [2, 'always', 'lower-case'],
    // Do not allow different cases for the subject in the commit message
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // Do not allow empty subjects in commit messages
    'subject-empty': [2, 'never'],
    // Do not allow a full stop at the end of the subject in commit messages
    'subject-full-stop': [2, 'never', '.'],
    // Enforce lowercase for the type in the commit message
    'type-case': [2, 'always', 'lower-case'],
    // Do not allow empty types in commit messages
    'type-empty': [2, 'never'],
    // Enforce a specific set of commit types
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'translation', 'security', 'changeset', 'draft']
    ]
  }
};
