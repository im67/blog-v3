<script lang="ts" setup>
import ColorCircle from '../views/components/ColorCircle.vue';

const container = useTemplateRef('container')
const { width, height } = useElementSize(container)
</script>

<template>
  <div class="w-full h-full p-6 flex flex-col gap-3">
    <section class="flex flex-col gap-3">
      <h2 class="home-title">
        欢迎来的这里
      </h2>
      <p>这里是个人博客的3.0版本<strong>「浪潮」</strong></p>
      <p>这里是网络中的一个不起眼的小角落, 就像宇宙中的一颗行星, 海浪掠过的一粒沙。</p>
      <p>记录了一些关于作者的文字, 随意而无序。</p>
      <strong>你在寻找意义，而我只是存在。</strong>
    </section>
    <div class="fixed square-min right-0 bottom-0 pointer-events-none z-[2]" ref="container">
      <ColorCircle class="right-0 bottom-0" :width :height></ColorCircle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.square-min {
  width: min(100%, 100vh);
  height: min(100%, 100vw);
}
</style>