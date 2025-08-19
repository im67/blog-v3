<script lang="ts" setup>
import { IconCalendarWeek, IconLink, IconCactus } from "@tabler/icons-vue"
import { get, values } from "lodash-es"
import dayjs from "dayjs"
import SearchBox from "./SearchBox.vue"
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

const searchSet = ref(new Set());

const isSearch = ref(false);

const filterList = computed(() => isSearch.value ? list.value.filter(item => searchSet.value.has(`${pathSuffix}${item.title}`)) : list.value)

const total = computed(() => filterList.value.length)

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

const pageList = computed(() => filterList.value.slice((currentPage.value - 1) * currentPageSize.value, (currentPage.value - 1) * currentPageSize.value + currentPageSize.value));


const onSearch = (v) => {
  const { search, value } = v;
  isSearch.value = search;
  searchSet.value = search ? value : new Set();
}
</script>

<template>
  <div class="h-full overflow-auto" ref="scroll">
    <div class="sticky top-11 search-shadow pt-1 bg-gray-100"></div>
    <div class="pt-3 sticky -top-1 bg-gray-100 px-6 box-border pb-2 z-[3]">
      <Suspense>
        <SearchBox @search="onSearch" />
      </Suspense>
    </div>
    <div v-if="pageList.length" class="px-6">
      <div v-for="item of pageList" class="my-6 border-b border-gray-300 py-4">
        <div class="flex flex-col gap-2">
          <h3 class="tracking-wider hover:text-teal-500 transition-colors hover:underline underline-offset-8 w-fit">
            <a :href="`${pathSuffix}${item.title}`" class="no-underline relative">{{ item.title }}
              <IconLink class="inline p-0.5" :size="33" />
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
    <div class="flex flex-col gap-4 items-center justify-center" style="height: calc(100% - 50px);" v-else>
      <IconCactus :size="80" />
      <div class="font-bold">没有找到你要的内容</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-shadow {
  box-shadow: #636e72 1px 5px 10px 1px;
}
</style>