<template>
  <div v-masonry-tile class="Category">
    <div class="content" :style="borderStyle">
      <h2 class="flex-row align-items-center" :style="backgroundStyle">
        {{ category.name }}
      </h2>
      <div v-for="(item, index) in category.children" :key="index" class="wrapper">
        <Folder
          v-if="!!item.children"
          :folder="item"
          :parentPath="path"
          :hideBorderBottom="index === 0 && !!category.color"
        />
        <Bookmark
          v-else
          :bookmark="item"
          :parentPath="path"
          :showBorderTop="index === 0 && !category.color"
          :notRoot="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bookmark from '@/components/Bookmark.vue';
import Folder from '@/components/Folder.vue';
import Utils from '@/Utils';

export default Vue.extend({
  name: 'Category',
  components: { Bookmark, Folder },
  props: {
    category: Object,
  },
  computed: {
    borderStyle(): string {
      return `border-color: ${this.category.color};`;
    },
    backgroundStyle(): string {
      return `background-color: ${this.category.color};`;
    },
    path(): string {
      return this.category.name;
    },
  },
});
</script>

<style scoped lang="scss">
.Category {
  width: 300px;
  margin-bottom: 16px;

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
</style>
