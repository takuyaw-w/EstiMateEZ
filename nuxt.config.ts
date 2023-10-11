// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  plugins: [
    '~/plugins/vuetify/index.ts'
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  devtools: { enabled: true }
})
