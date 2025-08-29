<script lang="ts" setup>
import * as d3 from "d3";

onMounted(() => {
  d3.select('clock-svg');
})
</script>

<template>
  <svg id="clock-svg" :width="600" :height="600" style="overflow: visible;"></svg>
</template>

<style lang="scss" scoped></style>