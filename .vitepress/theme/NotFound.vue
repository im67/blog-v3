<script lang="ts" setup>
import { IconError404 } from '@tabler/icons-vue';
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center gap-4">
    <IconError404 class="size-40 lg:size-60" />
    <div class="font-bold text-lg">你来到了一个不存在的地方</div>
    <a href="/"
      class="px-4 py-2 border border-zinc-400 rounded-md cursor-pointer transition-colors hover:bg-teal-400 swing-button">回到首页</a>
  </div>
</template>

<style lang="scss" scoped>
@keyframes swingShake {

  0%,
  60%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  10% {
    transform: translate(-6px, -6px) rotate(-6deg);
  }

  20% {
    transform: translate(6px, 6px) rotate(6deg);
  }

  30% {
    transform: translate(-6px, -6px) rotate(-6deg);
  }

  40% {
    transform: translate(6px, 6px) rotate(6deg);
  }

  50% {
    transform: translate(-6px, -6px) rotate(-6deg);
  }
}

.swing-button {
  display: inline-block;
  animation-name: swingShake;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  transform-origin: center center;
}
</style>