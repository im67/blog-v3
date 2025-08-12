<script lang="ts" setup>
import { IconListTree } from '@tabler/icons-vue';
import BlogDirectory from './BlogDirectory.vue';
import { onClickOutside } from '@vueuse/core';

const [directoryVisible, setDirectoryVisible] = useToggle(false);

const target = useTemplateRef('float-directory');

onClickOutside(target, () => setDirectoryVisible(false))

const onDirectoryClick = () => {
  setDirectoryVisible(true);
}
</script>

<template>
  <div class="fixed bottom-4 right-4 flex flex-col justify-end items-end">
    <div class="pr-4 border rounded-md shadow-stone-400 border-stone-300 bg-gray-100 max-w-60 max-h-100 overflow-auto" :class="{ 'hidden': !directoryVisible }" ref="float-directory">
      <BlogDirectory />
    </div>
    <div
      class="flex items-center justify-center size-16 rounded-full shadow-lg shadow-stone-400 bg-stone-100 lg:hidden" @click="onDirectoryClick">
      <IconListTree :size="28" />
    </div>
  </div>
</template>