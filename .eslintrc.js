module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:jest/style",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "no-only-tests",
    "react-hooks",
  ],
  rules: {
    "@typescript-eslint/array-type": ["error", { "default": "generic", "readonly": "generic" }],
    "@typescript-eslint/no-unnecessary-condition": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "curly": ["error"],
    "eqeqeq": ["error", "always", {"null": "ignore"}],
    "import/order": ["warn",  {
      groups: [
        ["builtin", "external"]
      ],
      'newlines-between': 'always',
    }],
    "import/no-useless-path-segments": ["error", { "noUselessIndex": true }],
    "jest/no-alias-methods": ["error"],
    "no-console": ["error"],
    "no-only-tests/no-only-tests": "error",
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
  },
  settings: {
    react: {
        version: 'detect',
    },
  },
};
