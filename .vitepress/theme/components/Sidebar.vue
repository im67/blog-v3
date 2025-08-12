<script lang="ts" setup>
import { useData } from 'vitepress';


const info = ref('陇ICP备2023000396号');
const sidebarRef = useTemplateRef('sidebar')

const { width } = useElementSize(sidebarRef);

const footerStyle = computed(() => {
    return {
        left: width.value / 2 + 'px'
    }
})

const data = useData();

</script>

<template>
    <div class="relative flex flex-col items-center justify-between lg:h-screen box-border border-r shadow border-gray-300 z-[3] bg-gray-100" ref="sidebar">
        <div class="p-8">
            <h2 class="transform lg:-rotate-90 tracking-widest">七</h2>
            <h2 class="transform lg:-rotate-90 tracking-widest">六</h2>
        </div>
        <footer class="fixed flex flex-col justify-center items-center origin-left transform -rotate-90 w-48 bottom-4 text-stone-500 text-sm underline-offset-4" :style="footerStyle">
        <span>@author: im6767</span>
        <a class="underline" href="https://beian.miit.gov.cn/#/Integrated/index">
            <div>
            {{ info }}
            </div>
        </a>
        </footer>
    </div>
</template>