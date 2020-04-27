import config from './data/siteConfig'

export default {
  mode: 'universal',
  // ------------------------------------
  // HEADERS OF THE PAGE
  // ------------------------------------
  head: {
    title: config.siteTitle,
    titleTemplate: `%s - ${config.siteTitle}`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
      {
        hid: 'description',
        name: 'description',
        content: config.siteDescription,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: config.siteTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: config.siteDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${config.siteUrl}/${config.siteLogo}`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: config.siteTitle,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: config.siteTitle,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${config.siteUrl}/${config.siteLogo}`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: config.siteDescription,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
    ],
  },
  // ------------------------------------
  // CUSTOM LOADER
  // ------------------------------------
  loading: '~/components/Loading.vue',
  // ------------------------------------
  // GLOBAL CSS
  // ------------------------------------
  css: ['@/assets/styles/main.scss'],
  // ------------------------------------
  // PLUGINS TO LOAD BEFORE MOUNTING THE APP
  // ------------------------------------
  plugins: [],
  // ------------------------------------
  // NUXT.JS DEV-MODULES
  // ------------------------------------
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],
  // ------------------------------------
  // NUXT.JS MODULES
  // ------------------------------------
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/browserconfig',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    'nuxt-responsive-loader',
    'nuxt-imagemin',
    '@nuxtjs/pwa',
  ],
  // ------------------------------------
  // PWA OPTIONS
  // ------------------------------------
  pwa: {
    manifest: {
      name: config.siteTitle,
      description: config.siteDescription,
      short_name: config.siteShortTitle,
      theme_color: config.themeColor,
      background_color: config.bkgColor,
    },
  },
  // ------------------------------------
  // BOOTSTRAPVUE GLOBALS/OPTIONS
  // ------------------------------------
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // componentPlugins: ['LayoutPlugin', 'FormPlugin']
  },
  // ------------------------------------
  // FONTAWESOME OPTIONS
  // ------------------------------------
  fontawesome: {
    imports: [
      // SOLID
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      // BRANDS
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  // ------------------------------------
  // CUSTOM WEBFONT OPTIONS
  // ------------------------------------
  webfontloader: {
    custom: {
      families: ['Poppins:n4,n7', 'Montserrat:n7', 'Rajdhani:n7'],
      urls: [
        'https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap',
        'https://fonts.googleapis.com/css?family=Montserrat:700&display=swap',
        'https://fonts.googleapis.com/css?family=Rajdhani:700&display=swap',
      ],
    },
  },
  // ------------------------------------
  // GLOBAL SCSS VARIABLE/MIXINS IMPORTS
  // ------------------------------------
  styleResources: {
    scss: [
      '~/assets/styles/_variables.scss',
      '~/node_modules/bootstrap/scss/_functions.scss',
      '~/node_modules/bootstrap/scss/_variables.scss',
      '~/node_modules/bootstrap/scss/_mixins.scss',
    ],
  },
  // ------------------------------------
  // BROWSERCONFIG OPTIONS
  // ------------------------------------
  browserconfig: {
    TileColor: config.themeColor,
  },
  // ------------------------------------
  // SITEMAP OPTIONS
  // ------------------------------------
  sitemap: {
    hostname: config.siteUrl,
  },
  // ------------------------------------
  // GOOGLE ANALYTICS
  // ------------------------------------
  googleAnalytics: {
    id: config.googleAnalyticsID,
  },
  // ------------------------------------
  // BUILD CONFIGURATION
  // ------------------------------------
  build: {
    extend(config, ctx) {},
  },
}
