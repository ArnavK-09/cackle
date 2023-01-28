// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app 
  app: {
    // page transition
    pageTransition: { name: 'page', mode: 'out-in' },

    // default head tag 
    head: {
      // title 
      title: 'Explore Cackle, Meet New People, Post Your Knowledge',
      titleTemplate: '%s | Cackle App',

      // meta tags 
      meta: [
        // standard tags 
        { name: 'description', content: 'Explore Cackle, Meet New People, Post Your Knowledge' },
        { name: 'theme-color', content: '#307af2' },
        { name: 'msapplication-TileColor', content: '#307af2' },


        // og tags 
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Explore Cackle, Meet New People, Post Your Knowledge' },
        { name: 'og:description', content: 'Explore Cackle, Meet New People, Post Your Knowledge' },
        { name: 'og:image', content: 'icon.png' },

        // twitter tags 
        { name: 'twitter:card', content: 'app' },
        { name: 'twitter:title', content: 'Explore Cackle, Meet New People, Post Your Knowledge' },
        { name: 'twitter:description', content: 'Explore Cackle, Meet New People, Post Your Knowledge' },
        { name: 'twitter:image', content: 'icon.png' },
      ],

      // favicons 
      link: [
        { rel: 'icon', type: 'image/png', href: "/favicon.ico" },
        { rel: 'apple-touch-icon', sizes: '180x180', href: "/apple-touch-icon.png" },
        { rel: 'icon', type: 'image/png', href: "/favicon-32x32.png", sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: "/favicon-16x16.png", sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: "/icon.png", sizes: '180x180' },

      ],

      // page language 
      htmlAttrs: {
        lang: 'en'
      },
    },
  },

  // auto import components
  components: true,

  // modules 
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/device', '@nuxtjs/color-mode'],

  // color mode 
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'cackle-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'cackle-color-mode'
  },

  // device 
  device: {
    refreshOnResize: true
  },

  // transpile icons
  build: {
    transpile: ['@heroicons/vue']
  },

  // runtime config 
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // // Cloudinary
    // cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    // cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    // cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },

  // css 
  css: [
    // global css file
    '@/assets/css/main.css',
  ],

  // type safe 
  typescript: {
    strict: true
  }
})
