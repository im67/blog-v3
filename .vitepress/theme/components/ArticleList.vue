<script lang="ts" setup>
import { IconCalendarWeek, IconLink } from "@tabler/icons-vue"
import { get, values } from "lodash-es"
import dayjs from "dayjs"
interface Frontmatter {
  title: string
  date: string
  summary: string
}
const pathSuffix = '/content/blog/'

const list = shallowRef<Frontmatter[]>([]);

onMounted(async () => {
  list.value = values<Record<string, Frontmatter>>(import.meta.glob('/content/blog/**/*.md', {
    eager: true
  })).map((mod) => get(mod, '__pageData.frontmatter'))
    .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());
  watch(pageSessionStore, (n) => {
    currentPage.value = n;
  }, { immediate: true });
})

const total = computed(() => list.value.length)

const onPageChanged = () => {
  const $scroll = document.querySelector("#main");
  $scroll?.scrollTo({ top: 0, behavior: 'smooth' })
}

const originPage = ref(1);
const originPageSize = ref(10);

const pageSessionStore = useSessionStorage('page', 1)


const {
  currentPage,
  currentPageSize,
  pageCount,
  prev,
  next,
} = useOffsetPagination({
  total: total,
  pageSize: originPageSize,
  page: originPage,
  onPageChange: onPageChanged
});

watch(currentPage, (n) => {
  pageSessionStore.value = n;
})

const pageList = computed(() => list.value.slice((currentPage.value - 1) * currentPageSize.value, (currentPage.value - 1) * currentPageSize.value + currentPageSize.value));

</script>

<template>
  <div class="px-6 h-full overflow-auto" ref="scroll">
    <div v-for="item of pageList" class="my-6 border-b border-gray-300 py-4">
      <div class="flex flex-col gap-2">
        <h3 class="tracking-wider hover:text-teal-500 transition-colors hover:underline underline-offset-8 w-fit">
          <a :href="`${pathSuffix}/${item.title}`" class="no-underline relative">{{ item.title }}
            <IconLink class="inline p-0.5" :size="33"/>
          </a>
        </h3>
        <div class="text-zinc-500 line-clamp-3">{{ item.summary }}</div>
        <div class="flex items-center gap-3">
          <div class="bg-gray-400 text-gray-100 px-2 py-1 rounded flex items-center gap-1 text-sm">
            <IconCalendarWeek :size="16" />
            <span>{{ dayjs(item.date).format('YYYY-MM-DD') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-8 flex justify-end gap-3 pr-8 box-border">
      <button class="border p-2 rounded cursor-pointer hover:bg-teal-400 transition-colors" @click="prev"
        v-if="currentPage !== 1">上一页</button>
      <button class="border p-2 rounded cursor-pointer hover:bg-teal-400 transition-colors" @click="next"
        v-if="currentPage !== pageCount">下一页</button>
    </div>
  </div>
</template>