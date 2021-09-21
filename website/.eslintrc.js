/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      env: {
        commonjs: true
      },
      files: [
        '.eslintrc.js',
        'babel.config.js',
        'commitlint.config.js',
        'jest.config.js',
        'lint-staged.config.js',
        'next.config.js',
        'prettier.config.js'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true
}
