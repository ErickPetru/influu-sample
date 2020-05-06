import * as fs from 'fs'
import * as path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default {
  mode: 'spa',
  head: {
    titleTemplate: (title) => title ? '%s - Influu MediaKit' : 'Influu MediaKit',
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    meta: [
      { name: 'apple-mobile-web-app-title', content: 'Influu MediaKit' },
      { name: 'application-name', content: 'Influu MediaKit' },
      { name: 'msapplication-TileColor', content: '#7f3782' },
      { name: 'theme-color', content: '#7f3782' }
    ]
  },
  loading: { color: '#d94e96' },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',

    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',

    // Doc: https://github.com/nuxt-community/axios-module
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://influu-api.herokuapp.com/graphql'
  },
  pwa: {
    workbox: {
      dev: false,
      debug: isDev,
      cleanupOutdatedCaches: true,
      cacheNames: {
        prefix: 'influu',
        suffix: 'v2005051900'
      }
    },
    meta: {
      lang: 'pt-BR',
      display: 'browser',
      name: 'Influu MediaKit',
      author: 'Erick Eduardo Petrucelli <erick.petrucelli@fatectq.edu.br>',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius labore laborum ut cumque neque, magnam dignissimos animi alias voluptatibus optio? Similique beatae laboriosam vero eum deserunt possimus velit reprehenderit.'
    },
    icon: false,
    manifest: false
  },
  webfontloader: {
    custom: {
      families: [
        'Ubuntu:n3,n4,n5',
        'Roboto:n3,n4,n5'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500&display=fallback',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=fallback'
      ]
    }
  },
  tailwindcss: {
    configPath: './tailwind.config.cjs',
    cssPath: './assets/css/tailwind.css',
    exposeConfig: false
  },
  purgeCSS: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.html'
    ],
    whitelist: ['html', 'body']
  },
  server: {
    https: isDev
      ? {
        key: fs.readFileSync(path.resolve(__dirname, 'private/localhost.key')),
        cert: fs.readFileSync(path.resolve(__dirname, 'private/localhost.crt'))
      }
      : false
  },
  build: {
    postcss: {
      plugins: {
        'postcss-color-mod-function': {
          importFrom: './assets/css/variables.css'
        }
      }
    },

    parallel: isDev,

    extend (config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      } else {
        config.optimization.splitChunks.maxSize = 220000
      }
    }
  }
}
