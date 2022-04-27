module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "semi": [1, "never"],
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "no-irregular-whitespace": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-import-module-exports": "off",
    "no-param-reassign": "off",
    "react/prop-types": "off",
    "no-alert": "off"
  },
};
