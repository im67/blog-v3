<script lang="ts" setup>
import { useData, useRoute } from 'vitepress';

const menu = [
  { label: '首页', path: '/home/' },
  { label: '博客', path: '/content/' }
]
const route = useRoute();

</script>

<template>
  <div class="flex items-center justify-between header-menu font-normal z-3">
    <div class="grow-1 flex justify-around border-b-[1px] border-stone-300">
      <h3 v-for="item of menu" class="cursor-pointer menu-item relative" :class="{ 'active': route.path.startsWith(item.path) }">
        <a :href="item.path" class="inline-block py-3">{{ item.label }}</a>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item::before {
  content: '';
  position: absolute;
  display: block;
  height: 3px;
  width: 0;
  background-color: oklch(44.6% 0.043 257.281);
  bottom: -1px;
  transition: all .3s ease;
}

.menu-item:hover::before, .active.menu-item::before {
  width: 100%;
}
</style>