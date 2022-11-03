module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
