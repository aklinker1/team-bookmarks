<template>
  <div class="Folder" :class="{ hideBorderBottom, lightTheme, minimized: isMinimized }">
    <div class="header">
      <h3>{{ folder.name }}</h3>
      <div v-ripple="rippleColor" class="chevron-wrapper" @click="toggleMinimized">
        <div class="chevron">
          <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path
              :fill="iconColor"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <transition name="list">
      <div v-if="!isMinimized">
        <div v-for="(item, index) in folder.children" :key="index" class="child-inset">
          <Folder v-if="!!item.children" :folder="item" :parentPath="path" />
          <Bookmark v-else :bookmark="item" :parentPath="path" notRoot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bookmark from '@/components/Bookmark.vue';
import ThemeMixin from '../mixins/ThemeMixin';
import TreeMixin from '../mixins/TreeMixin';

export default Vue.extend({
  name: 'Folder',
  components: { Bookmark },
  mixins: [ThemeMixin, TreeMixin],
  props: {
    folder: Object,
    parentPath: String,
    hideBorderBottom: Boolean,
  },
  computed: {
    path(): string {
      return this.parentPath + ' > ' + this.folder.name;
    },
  },
});
</script>

<style scoped lang="scss">
.Folder {
  border-top: 1px solid rgba($color: white, $alpha: 0.12);
  margin-bottom: 8px;

  &.lightTheme,
  &.lightTheme * {
    color: rgba($color: #000000, $alpha: 0.9);
  }

  &.hideBorderBottom {
    border-top: 0px;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      flex: 1;
      font-size: 16px;
      padding: 8px 12px;
    }

    .chevron-wrapper {
      width: 24px;
      height: 24px;
      padding: 4px;
      margin: 4px;
      margin-right: 8px;
      border-radius: 50%;
      cursor: pointer;

      .chevron {
        transition: 250ms;
        rotate: 180deg;
        opacity: 0;
        width: 24px;
        height: 24px;
      }
    }
  }

  .child-inset {
    margin-left: 12px;
  }

  &:hover,
  &.minimized {
    .chevron {
      opacity: 1 !important;
    }
  }

  &.minimized {
    margin-bottom: 0px;

    .chevron {
      rotate: 0deg !important;
    }
  }

  .list-enter-active,
  .list-leave-active {
    overflow-y: hidden;
    transition: 250ms;
    transition-property: max-height;
  }
  .list-enter,
  .list-leave-to {
    max-height: 0;
  }
  .list-enter-to,
  .list-leave {
    max-height: 300px;
  }
}
</style>
