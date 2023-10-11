// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  plugins: [
    '~/plugins/vuetify/index.ts'
  ],
  devtools: { enabled: true }
})
