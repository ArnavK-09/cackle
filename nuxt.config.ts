// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // app 
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Explore Cackle, Meet New People, Post Your Knowledge',
      titleTemplate: '%s | Cackle App',
      meta: [
        { hid: 'description', name: 'description', content: 'Cackle Site' }
      ],
      link: [
        {rel: 'icon', type: 'image/png', href: "/icon.png"}
      ],
      htmlAttrs: {
        lang: 'en'
      },
    }
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
})
