// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
})
