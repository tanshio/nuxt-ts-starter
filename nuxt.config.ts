const srcDir = 'src/'

const config = {
  srcDir,
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false,
  },
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
    // [
    //   'nuxt-i18n',
    //   {
    //     parsePages: false,
    //     locales: [{ code: 'ja', iso: 'ja-JP' }, { code: 'en', iso: 'en-US' }],
    //     defaultLocale: 'ja',
    //     vueI18nLoader: true,
    //     // Options
    //   },
    // ],
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-calc': {},
        'postcss-object-fit-images': {},
        'postcss-custom-media': {
          importFrom: [`./${srcDir}assets/mq.json`],
        },
      },
      preset: {
        stage: 0,
        features: {
          'nesting-rules': true,
        },
        autoprefixer: { grid: true },
        // importFrom: ['assets/css/main.css'],
        // preserve: true,
      },
      terser: {
        terserOptions: {
          compress: {
            drop_console: process.env.NODE_ENV === 'production',
          },
        },
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
