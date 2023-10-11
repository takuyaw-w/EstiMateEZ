<script setup lang="ts">
const tab = ref(1)
const _items = [...Array(20)].map((val, i) => ({ text: `aaa${i}`, icon: '$folder' }))
const items = ref(_items)
const _itemsf = [...Array(20)].map((val, i) => ({ text: `aaa${i}`, icon: '$file' }))
const itemsf = ref(_itemsf)

function dbcli(e) {
    console.log(e)
}
function select(e) {
    console.log('select', e)
}
</script>
<template>
    <v-app>
        <v-navigation-drawer>
            <v-tabs v-model="tab" density="compact" fixed-tabs>
                <v-tab :value="1">{{ $t('navigation.folder') }}</v-tab>
                <v-tab :value="2">{{ $t('navigation.tags') }}</v-tab>
            </v-tabs>

            <v-divider />

            <v-btn block variant="text" append-icon="$folderPlus">{{ $t('navigation.create') }}</v-btn>

            <v-divider />

            <v-list>
                <v-list-item :prepend-icon="item.icon" density="compact" v-for="(item, i) in items" :key="i" :value="item">
                    <template #append>
                        <v-list-item-action end>
                            <v-btn @click="dbcli" size="small" density="compact" :ripple="false" variant="text"
                                icon="$edit"></v-btn>
                        </v-list-item-action>
                    </template>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer>

            <v-btn block variant="text" append-icon="$filePlus">{{ $t('navigation.create') }}</v-btn>

            <v-divider />

            <v-list>
                <v-list-item density="compact" v-for="(item, i) in itemsf" :key="i" :value="item">
                    <template #prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
