import google from 'eslint-config-google-jsdocless';
import prettier from 'eslint-config-prettier';

// ignore unused exports
export default [
  google,
  prettier,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
];
