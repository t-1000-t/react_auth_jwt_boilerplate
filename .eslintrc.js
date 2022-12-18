module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add this line!
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'linebreak-style': ['error', 'windows'],
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'no-trailing-spaces': 'off',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 0,
    'import/order': 0,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/named': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'react/no-unused-prop-types': 'warn',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-console': 0,
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-multiple-empty-lines': 'error',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'forbid' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'no-use-before-define': 'off',
    'arrow-parens': 'off',
    'dot-notation': 'off',
    'function-paren-newline': ['warn', 'consistent'],
    'no-debugger': 'off',
  },
}
