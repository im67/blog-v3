<script lang="ts" setup>
import { IconSearch } from "@tabler/icons-vue"
import localSearchIndex from '@localSearchIndex'
import MiniSearch, { type SearchResult } from 'minisearch'
import { debouncedRef } from "@vueuse/core"
import { get, replace } from "lodash-es"

interface Emits {
  (e: 'search', v: { search: boolean, value: Set<string> }): void
}

const emits = defineEmits<Emits>();

const getSesarchIndex = async () => {
  const data = await localSearchIndex.root();
  return data.default;
}

const index = MiniSearch.loadJSON(await getSesarchIndex(), {
  fields: ['title'],
  storeFields: ['title'],
  tokenize(text) {
    return text.split('')
  },
  searchOptions: {
    fuzzy: false,
    prefix: true,
    boost: { title: 4, text: 2 }
  }
})

const searchText = ref('');

const debouncedSearchText = debouncedRef(searchText, 800);

const list = computed(() => new Set(
  index
  .search(debouncedSearchText.value)
  .filter(r => r.title.includes(debouncedSearchText.value))
  .map((r) => replace(get(r, 'id', ''), /.html#(.*)$/g, ''))));

watch(list, (n) => {
  emits('search', { search: !!debouncedSearchText.value, value: n });
})

</script>

<template>
  <div>
    <div class="border h-10 px-2 rounded-md group border-gray-400 flex items-center justify-between transition-shadow">
      <input class="w-full block h-full outline-none grow" v-model="searchText" placeholder="输入关键字进行文章检索" />
      <IconSearch :size="20" class="text-stone-500" />
    </div>
  </div>
</template>