module.exports = {
  env: {
    'es6': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  plugins: [
    '@typescript-eslint',
    "promise",
    "pure"
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    "no-unused-vars": "off",
    "key-spacing": "off",
    "jsx-quotes": [2, "prefer-single"],
    "object-curly-spacing": [2, "always"],
    "pure/pure": "warn",
    "no-case-declarations": 2,
    "semi": [1, "never"],
    "comma-dangle": "off",
    "no-undef": "off",
    "one-var": "off",
    "pure/pure": "warn"
  }
}