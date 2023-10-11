import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiFolderOutline, mdiFolderPlusOutline, mdiCogOutline, mdiFileDocumentOutline, mdiFilePlusOutline } from '@mdi/js'
export default {
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            folderPlus: mdiFolderPlusOutline,
            filePlus: mdiFilePlusOutline,
            folder: mdiFolderOutline,
            config: mdiCogOutline,
            file: mdiFileDocumentOutline,
        },
        sets: {
            mdi
        }
    }
}
