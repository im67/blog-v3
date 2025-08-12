<script lang="ts" setup>
import { useData } from 'vitepress';
import BlogDirectory from './components/BlogDirectory.vue';
import FloatDirectory from './components/FloatDirectory.vue';
import Viewer from 'viewerjs';
defineOptions({
  name: 'BlogPage'
})
const { frontmatter } = useData();

onMounted(async () => {
  await nextTick();
  const $content = document.querySelector<HTMLElement>('.blog-content');
  if ($content) {
    new Viewer($content, {
      toolbar: true,     // 显示工具栏
      title: false,      // 关闭标题
      movable: true,     // 允许拖动
      zoomable: true,    // 允许缩放
    });
  }
})
</script>

<template>
  <div class="flex">
    <div class="shrink-0 grow w-3/4">
      <div class="flex items-center gap-1 mx-6 my-6">
        <h2 class="w-fit underline underline-offset-8">{{ frontmatter.title }}</h2>
      </div>
      <Content class="blog-content" />
    </div>
    <div class="border-l border-gray-300 w-1/4 sticky top-0 box-border hidden lg:block">
      <BlogDirectory />
    </div>
    <FloatDirectory class="lg:hidden" />
  </div>
</template>