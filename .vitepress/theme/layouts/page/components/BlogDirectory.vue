<script lang="ts" setup>
const BASE_CLASS = '.blog-content';
const list = ref<Element[]>([]);
onMounted(() => {
  const target = document.querySelector(BASE_CLASS);
  if (target) {
    const hs = target.querySelectorAll('h1,h2,h3,h4');
    list.value = Array.from(hs).filter(node => node.textContent?.replace(/\u200B/g, ""));
  }
})

const onAnchorClick = (node: Element) => {
  node.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <ol class="text-stone-500 my-4">
    <li v-for="node of list" :class="`anchor-${node.tagName}`" class="cursor-pointer hover:text-stone-700 transition-all" @click="() => onAnchorClick(node)">
      {{ node.textContent }}
    </li>
  </ol>
</template>

<style lang="scss">
.anchor {

  &-H2 {
    padding-left: 1rem;
    margin: .7rem 0;
  }

  &-H3 {
    padding-left: 2rem;
    margin: .7rem 0;
  }

  &-H4 {
    padding-left: 3rem;
    margin: .7rem 0;
  }
}
</style>