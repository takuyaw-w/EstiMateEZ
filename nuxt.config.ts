// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    './modules/vuetify.ts'
  ],
  devtools: { enabled: true }
})
