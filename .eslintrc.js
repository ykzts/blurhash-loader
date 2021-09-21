/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist/', 'examples/', 'test/output/', 'website/'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['*.ts']
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  root: true
}
