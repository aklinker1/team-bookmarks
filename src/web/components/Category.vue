<template>
  <div
    class="w-full border border-black dark:border-gray-600 rounded-sm"
    :style="borderStyle"
  >
    <h2
      class="flex items-center text-xl py-3 px-4 bg-black dark:bg-gray-600 text-white"
      :style="backgroundStyle"
    >
      {{ category.name }}
    </h2>
    <div v-for="(item, index) in category.children" :key="item.name">
      <Folder
        v-if="'children' in item"
        :folder="item"
        :parentPath="path"
        :hideBorderTop="index === 0"
        @reloadGrid="$emit('reloadGrid')"
      />
      <Bookmark
        v-else
        :bookmark="item"
        :parentPath="path"
        :notRoot="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ICategory } from "../../types";
import Bookmark from "./Bookmark.vue";
import Folder from "./Folder.vue";

export default defineComponent({
  name: "Category",
  components: { Bookmark, Folder },
  props: {
    category: { type: Object as PropType<ICategory>, required: true },
  },
  emits: ['reloadGrid'],
  setup(props) {
    const borderStyle = computed<string | undefined>(() =>
      props.category.color ? `border-color: ${props.category.color};` : undefined
    );
    const backgroundStyle = computed<string | undefined>(() =>
      props.category.color ? `background-color: ${props.category.color};` : undefined
    );
    const path = computed(() => props.category.name);

    return {
      borderStyle,
      backgroundStyle,
      path,
    };
  },
});
</script>

<style scoped>
/*
.Category {
  width: 100%;

  h2 {
    font-size: 20px;
    padding: 12px 16px;
    position: relative;

    span {
      margin-right: 24px;
    }
  }

  .content {
    border: 1px solid #808080;
    box-sizing: border-box;
    border-radius: 2px;
  }

  .inset {
    margin-left: 32px;
  }
}
*/
</style>
