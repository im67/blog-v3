<script lang="ts" setup>
import * as d3 from "d3";

interface Props {
  width: number
  height: number
}

const colors = [
  "#323e39",
  "#707a73",
  "#aebaae",
  "#dce7e9",
  "#e5e7eb"
]


const props = withDefaults(
  defineProps<Props>(),
  {
    height: 600,
    width: 600
  }
);

const size = computed(() => Math.min(props.height, props.width));

const setSvg = () => {
  const svg = d3.select("svg");
  svg.selectAll('*').remove();
  const ag = svg.append('g').style('overflow', 'visible');
  ag.append('rect').attr('x', 0).attr('y', 0).attr('width', '100%').attr('height', '100%').attr('fill', 'none');
  ag.attr('transform', `translate(${size.value / 2}, ${size.value / 2}) rotate(-45 ${size.value / 2} ${size.value / 2}) `)
  for (let i = 4; i >= 0; i--) {
    // 构造不规则波浪数据
    const data = d3.range(-size.value, 2 * size.value, 60).map(x => ({
      x: x,
      y: size.value / 2 - ((i + 1) * size.value / 8) + Math.sin(x * Math.random()) * (Math.random() * 40 + Math.random() * 20)
    }));

    const line = d3.line<{ x: number, y: number }>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveNatural);

    if (!data.length) return;
    let pathD: string = line(data)!;

    // 获取右下角和左下角点（闭合区域） 
    pathD += ` L${size.value},${size.value / 2}`;
    pathD += ` L0,${size.value / 2}`;
    pathD += ` Z`;
    const g = ag.append('g');
    g.attr("transform", `scale(1, 0)`)
      .attr("transform-origin", `0 ${size.value}`)
      .style('overflow', 'visible')

    const path = g.append("path")

    path.attr("d", pathD)
      .attr("fill", colors[i])
      .attr("stroke", "none")
      .attr("stroke-width", 2)
      .attr('opacity', 1)

    const delay = (5 - i) * 500;

    g.transition()
      .delay(delay)
      .duration(3000)
      .attr("transform", `scale(1, 1)`)
      .attr("opacity", 1)
    // .transition()
    // .attr("transform", `scale(1, 0)`)
    // .attr("opacity", 0)
    // .transition()
  }
}


onMounted(() => {
  setSvg();
  // useIntervalFn(setSvg, 10000)
  watch(size, () => {
    setSvg();
  })
})


</script>

<template>
  <svg :width="size" :height="size" style="overflow: visible;"></svg>
</template>
