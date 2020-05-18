<template>
  <div
    class="Bookmark"
    :class="{ showBorderTop, notRoot, lightTheme }"
    draggable="false"
    ondragstart="return false;"
  >
    <a
      v-ripple="rippleColor"
      class="outer-link"
      :class="{ disabled }"
      :title="title"
      :href="bookmark.url"
    >
      <object :data="bookmark.icon" type="image/png" class="icon-size-small margin-right">
        <object :data="favicon" type="image/png" class="icon-size-small">
          <svg class="icon-size-small" viewBox="0 0 24 24">
            <path
              :fill="iconColor"
              d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </object>
      </object>
      <p class="margin-right flex-1">{{ bookmark.name }}</p>
      <a class="new-tab" v-ripple="rippleColor" :href="bookmark.url" target="_blank" @click.stop>
        <svg class="icon-size-small" viewBox="0 0 24 24">
          <path
            :fill="iconColor"
            d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z"
          />
        </svg>
      </a>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThemeMixin from '../mixins/ThemeMixin';
import { FAVICON_MAP } from '@/bookmarks';

const NO_URL_ICON =
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/openmoji/242/cross-mark_274c.png';

export default Vue.extend({
  name: 'Bookmark',
  mixins: [ThemeMixin],
  props: {
    bookmark: Object,
    parentPath: String,
    showBorderTop: Boolean,
    notRoot: Boolean,
  },
  computed: {
    disabled(): boolean {
      return !this.bookmark.url;
    },
    title(): string | null {
      if (!this.disabled) return null;
      return 'No URL for this bookmark';
    },
    path(): string {
      return this.parentPath + ' > ' + this.bookmark.name;
    },
  },
  data() {
    let favicon = NO_URL_ICON;
    if (this.bookmark.url) {
      let url = this.bookmark.url as string;
      url = url.replace('https://', '').replace('http://', '');
      url = url.substring(0, url.indexOf('/'));
      favicon = FAVICON_MAP[url] || `https://${url || ''}/favicon.ico`;
    }
    return {
      favicon,
    };
  },
});
</script>

<style scoped lang="scss">
.Bookmark {
  &.lightTheme,
  &.lightTheme * {
    color: rgba($color: #000000, $alpha: 0.9);
  }

  &.showBorderTop {
    margin-top: 4px;
    border-top: 1px solid #808080;
  }

  &.notRoot {
    margin-right: 8px;
  }

  .outer-link {
    min-height: 36px;
    text-decoration: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-right: 2px;
    box-sizing: border-box;

    &.disabled {
      cursor: not-allowed;
      opacity: 0.7;
      p {
        opacity: 0.48;
      }
    }

    p {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .margin-right {
      margin-right: 16px;
    }

    .new-tab {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: 250ms;
      transition-property: opacity;
    }

    &:hover {
      background-color: rgba($color: #808080, $alpha: 0.18);

      .new-tab {
        opacity: 1;
      }
    }
  }
}
</style>
