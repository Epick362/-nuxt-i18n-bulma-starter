module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'universal',
  head: {
    title: 'Index',
    titleTemplate: '%s | Nuxt.js + i18n and Bulma starter pack',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'REPLACETHIS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1687C5' },
  plugins: [
    '~/plugins/scrollTo',
    '~/plugins/i18n',
    { src: '~plugins/ga', ssr: false },
    { src: '~plugins/vue-carousel', ssr: false },
    { src: '~plugins/vue-slide-up-down', ssr: false },
    { src: '~plugins/fontAwesome', ssr: false }
  ],
  modules: [
    ['nuxt-i18n-module', {
      languages: ['en', 'sk']
    }],
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: false,
      defaultIconPack: 'fa'
    }]
  ],
  router: {
    middleware: 'i18n'
  },
  /*
  ** Build configuration
  */
  css:[
    { src: '~assets/app.scss', lang: 'sass' },
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-i18n'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
