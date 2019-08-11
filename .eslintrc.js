module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    '@typescript-eslint/prefer-interface': "off",
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/no-object-literal-type-assertion': [
      'error',
      { allowAsParameter: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
  settings: {
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    },
  },
}
