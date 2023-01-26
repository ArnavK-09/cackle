export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', (e) => {
        console.log(nuxtApp)
     })
})