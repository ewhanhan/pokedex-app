module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'react/jsx-filename-extension': ['warn', {extensions: ['.tsx']}],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/prefer-default-export': 'off',

    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: true,
      },
    ],

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'prefer-template': 'off',
    'no-unused-expressions': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
