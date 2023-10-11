import {createVuetify} from 'vuetify'
import iconset from '~/plugins/vuetify/lib/icons'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ...iconset
    })
    nuxtApp.vueApp.use(vuetify)
})
