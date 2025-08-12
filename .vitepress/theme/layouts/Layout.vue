<script lang="ts" setup>
import { useData, useRoute } from 'vitepress';
import ListPage from './pages/ListPage.vue'
import BlogPage from './pages/BlogPage.vue'
import NotFoundPage from './pages/NotFound.vue';

const route = useRoute()

const CurrentPage = computed(() => {
    return route.path.startsWith('/content/blog/')
        ? BlogPage
        : ListPage
})

const { page } = useData();

</script>

<template>
    <div class="w-screen h-screen flex">
        <div v-if="$slots['sidebar']" class="hidden lg:block">
            <slot name="sidebar"></slot>
        </div>
        <div class="flex flex-col grow overflow-hidden">
            <slot name="header" v-if="!page.isNotFound"></slot>
            <slot name="main">
                <div v-if="page.isNotFound" class="h-full w-full wwwwwww">
                    <NotFoundPage />
                </div>
                <component :is="CurrentPage" class="grow overflow-auto" id="main" v-else />
            </slot>
        </div>
    </div>
</template>