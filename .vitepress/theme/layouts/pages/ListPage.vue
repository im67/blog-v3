<script lang="ts" setup>
defineOptions({
  name: 'ListPage'
})

const scroll = useTemplateRef('scroll');
const $scroll = ref();
const scrollY = useSessionStorage('scrollY', 0);
const { y } = useScroll($scroll);

watch(y, (n) => {
  scrollY.value = n;
})

onMounted(async () => {
      await nextTick();
  if (scrollY.value && $scroll.value) {
    y.value = scrollY.value;
  }
})

watch(scroll, (n) => {
  $scroll.value = n.$el;
})
</script>

<template>
  <Content ref="scroll" />
</template>