<template>
  <div id="app" :class="{ lightTheme }">
    <SortOrderDialog :isVisible="isSortOrderEditorOpen" @close="isSortOrderEditorOpen = false" />
    <h1 v-if="bookmarksTitle" class="title">{{bookmarksTitle}}</h1>
    <div
      id="grid"
      style="null"
      v-masonry
      item-selector=".Category"
      :horizontal-order="false"
      :fit-width="true"
      :gutter="16"
      :column-width="300"
      stagger="0s"
    >
      <Category v-for="(category, index) in sortedCategories" :key="index" :category="category" />
    </div>
    <div class="settings-buttons">
      <div v-if="lightTheme" class="noselect outline-button" @click="changeTheme('dark')">
        <p>Switch to <strong>dark theme</strong></p>
        <div><div v-ripple="rippleColor" /></div>
      </div>
      <div v-else class="noselect outline-button" @click="changeTheme('light')">
        <p>Switch to <strong>light theme</strong></p>
        <div><div v-ripple="rippleColor" /></div>
      </div>
      <div class="noselect outline-button change-order" @click="changeSortOrder">
        <p>Change <strong>sort order</strong></p>
        <div><div v-ripple="rippleColor" /></div>
      </div>
    </div>
    <p v-if="repoUrl" class="github-link">
      Served from: <a :href="repoUrl">{{repoUrl}}</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/components/Category.vue';
import Utils from './Utils';
import ThemeMixin from '@/mixins/ThemeMixin';
import SortOrderDialog from '@/components/SortOrderDialog.vue';
import SortedCategoriesMixin from '@/mixins/SortedCategoriesMixin';
import config from '@/config';

export default Vue.extend({
  name: 'App',
  components: { Category, SortOrderDialog },
  mixins: [ThemeMixin, SortedCategoriesMixin],
  methods: {
    changeSortOrder(): void {
      // @ts-ignore
      this.isSortOrderEditorOpen = true;
    },
  },
  data() {
    return {
      isSortOrderEditorOpen: false,
      bookmarksTitle: config.title,
      repoUrl: config.repoUrl,
    };
  },
  watch: {
    sortedCategories(): void {
      Utils.reloadGrid(this);
    },
  },
  beforeCreate() {
    window.document.title = config.title || "Team Bookmarks";
  }
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(32, 32, 32);

  &.lightTheme {
    background-color: rgb(248, 248, 248);
    * {
      color: black;
    }
  }

  .title {
    color: rgba($color: white, $alpha: 0.24);
    margin-top: 32px;
  }

  #grid {
    margin-top: 32px;
  }

  .settings-buttons {
    margin-top: 64px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;

    .outline-button {
      position: relative;
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 3px;
      border: 1px solid rgba($color: #808080, $alpha: 0.48);

      &:hover {
        background-color: rgba($color: #808080, $alpha: 0.12);
      }

      & > div {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        & > div {
          width: 100%;
          height: 100%;
        }
      }
    }

    .change-order {
      margin-left: 16px;
    }
  }

  .github-link,
  .github-link a {
    opacity: 0.7;
    color: #808080;
    margin-bottom: 64px;
  }
}
</style>
