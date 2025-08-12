<script lang="ts" setup>
import { useRoute } from 'vitepress';
import { get } from 'lodash-es';
import ListPage from './page/ListPage.vue'
import BlogPage from './page/BlogPage.vue'

const route = useRoute()

const CurrentPage = computed(() => {
    return route.path.startsWith('/content/blog/')
        ? BlogPage
        : ListPage
})

const isNotFound = computed(() => get(route, 'data.isNotFound', false))

</script>

<template>
    <div class="w-screen h-screen flex">
        <div v-if="$slots['sidebar']" class="hidden lg:block">
            <slot name="sidebar"></slot>
        </div>
        <div class="flex flex-col grow overflow-hidden">
            <slot name="header" v-if="!isNotFound"></slot>
            <slot name="main">
                <component :is="CurrentPage" class="grow overflow-auto" id="main" />
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
#main {
& > div {
    height: 100%;
    width: 100%;
}
}
</style>