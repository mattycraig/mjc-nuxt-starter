import config from './data/siteConfig'

export default {
  // ------------------------------------
  // SEO & HEADERS
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
  loading: '~/components/Loading/Loading.vue',
  // ------------------------------------
  // LOAD COMPONENTS AUTOMATICALLY
  // ------------------------------------
  components: true,
  // ------------------------------------
  // CSS
  // ------------------------------------
  css: ['@/assets/styles/main.scss'],
  extractCSS: true,
  // ------------------------------------
  // PLUGINS
  // ------------------------------------
  plugins: [],
  // ------------------------------------
  // NUXT.JS DEV-MODULES
  // ------------------------------------
  buildModules: [
    '@nuxt/components',
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
  // PROGRESSIVE WEB APP
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
  // BOOTSTRAPVUE
  // ------------------------------------
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // componentPlugins: ['LayoutPlugin', 'FormPlugin']
  },
  // ------------------------------------
  // FONTAWESOME
  // ------------------------------------
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  // ------------------------------------
  // WEBFONTS
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
  // BROWSERCONFIG
  // ------------------------------------
  browserconfig: {
    TileColor: config.themeColor,
  },
  // ------------------------------------
  // SITEMAP
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
}
