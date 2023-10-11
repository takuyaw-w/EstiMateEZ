import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        icons: {
            defaultSet: 'mdi',
            aliases: {
                ...aliases,
            },
            sets: {
                mdi
            }
        }
    })
    nuxtApp.vueApp.use(vuetify)
})
