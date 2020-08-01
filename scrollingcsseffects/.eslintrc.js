module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
 'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    "space-before-function-paren": ['error', 'always'],
    "no-trailing-spaces": ['error', { "skipBlankLines": false }],
   "no-multiple-empty-lines": ["error"],
  }
};