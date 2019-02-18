const config = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt TS project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3B8070' },
  css: ['tachyons/css/tachyons.min.css', '~/assets/css/main.css'],
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          stage: 0,
          features: {
            'nesting-rules': true
          },
          autoprefixer: { grid: true },
          importFrom: 'assets/css/_vars.css',
          preserve: false,
          browsers: 'last 4 versions'
        }
      }
    }
  }
}

export default config
