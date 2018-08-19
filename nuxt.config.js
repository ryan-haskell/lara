module.exports = {

  css: [
    '@/assets/styles/main.scss'
  ],

  head: {
    title: 'Lara',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Anything can happen.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i' }
    ],
    script: [
      { src: 'https://unpkg.com/feather-icons' },
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },

  loading: { color: '#06f' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
