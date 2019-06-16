import * as postCssCustomMedia from 'postcss-custom-media'
const config = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt TS project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#3B8070' },
  css: ['~/assets/css/main.css'],
  modules: [
    [
      'nuxt-i18n',
      {
        parsePages: false,
        locales: [{ code: 'ja', iso: 'ja-JP' }, { code: 'en', iso: 'en-US' }],
        defaultLocale: 'ja',
        vueI18nLoader: true,
        // Options
      },
    ],
  ],
  build: {
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes')(),
        require('postcss-object-fit-images')(),
        require('postcss-calc')(),
        postCssCustomMedia({
          extensions: {
            '--v-sm': '(min-width: 640px)',
            '--v-sm2': '(min-width: 768px)',
            '--v-md': '(min-width: 1024px)',
            '--v-lg': '(min-width: 1200px)',
            '--v-xl': '(min-width: 1440px)',
          },
        }),
      ],
      preset: {
        stage: 0,
        features: {
          'nesting-rules': true,
        },
        autoprefixer: { grid: true },
        // importFrom: ['assets/css/_var.css','./assets/css/grid/_grid.css'],
        preserve: true,
      },
    },
  },
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      })
    }
  },
}

export default config
