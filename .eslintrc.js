module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['build/**/*', 'src/serviceWorker.ts'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
