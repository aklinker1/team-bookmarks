<template>
  <div
    class="border-black border-opacity-20 dark:border-white dark:border-opacity-20"
    :class="{
      'border-t': !hideBorderTop,
      'border-t-0': hideBorderTop,
    }"
  >
    <div class="h-10 flex items-center pl-3 pr-2">
      <h3 class="flex-1 font-medium">{{ folder.name }}</h3>
      <div
        class="w-8 h-8 p-1 hover-bg rounded-full transform rotate-0 cursor-pointer transition-transform"
        :class="{
          'rotate-180': isMinimized,
        }"
        @click="toggleMinimizedAndReloadGrid"
      >
        <svg class="w-6" viewBox="0 -1 24 23">
          <path
            class="fill-current text-black text-opacity-60 dark:text-white dark:text-opacity-70"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </div>
    </div>
    <transition name="list">
      <div v-if="!isMinimized">
        <div v-for="(item, index) in folder.children" :key="index" class="pl-2 -mt-1">
          <Folder v-if="!!item.children" :folder="item" :parentPath="path" @reloadGrid="$emit('reloadGrid')" />
          <Bookmark v-else :bookmark="item" :parentPath="path" notRoot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Bookmark from "./Bookmark.vue";
import { useTree } from "../composition/tree";

export default defineComponent({
  name: "Folder",
  components: { Bookmark },
  props: {
    folder: { type: Object as PropType<IFolder>, required: true },
    parentPath: { type: String, required: true },
    hideBorderTop: Boolean,
  },
  emits: ["reloadGrid"],
  setup(props, { emit }) {
    const path = computed(() => `${props.parentPath} > ${props.folder.name}`);
    const { isMinimized, toggleMinimized } = useTree(path);

    const toggleMinimizedAndReloadGrid = () => {
      toggleMinimized();
      emit("reloadGrid");
    }

    return {
      path,
      isMinimized,
      toggleMinimizedAndReloadGrid,
    };
  },
});
</script>
