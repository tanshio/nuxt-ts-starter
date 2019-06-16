module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 2,
  },
  settings: {
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    },
  },
}
