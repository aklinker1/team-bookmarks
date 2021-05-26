<template>
  <a
    class="m-1 p-2 flex items-center space-x-3 flex-1 hover-bg rounded group"
    :class="{ 'opacity-70 pointer-events-none': disabled }"
    :title="title"
    :href="bookmark.url"
    draggable="false"
    ondragstart="return false;"
  >
    <object :data="bookmark.icon" type="image/png" class="w-6">
      <object class="w-6" :data="favicon" type="image/png">
        <svg viewBox="0 0 24 24">
          <path
            class="fill-current text-gray-700 dark:text-gray-400"
            d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
      </object>
    </object>
    <p class="flex-1" :class="{ 'opacity-50': disabled }">
      {{ bookmark.name }}
    </p>
    <a :href="bookmark.url" target="_blank" @click.stop class="transition-opacity opacity-0 group-hover:opacity-100">
      <svg class="w-6" viewBox="0 0 24 24">
        <path
          class="fill-current text-gray-500 dark:text-gray-400"
          d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z"
        />
      </svg>
    </a>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { IBookmark } from "../../types";
import { useConfig } from "../composition/config";

const NO_URL_ICON =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/openmoji/242/cross-mark_274c.png";

export default defineComponent({
  props: {
    bookmark: { type: Object as PropType<IBookmark>, required: true },
    parentPath: { type: String, required: true },
    showBorderTop: Boolean,
    notRoot: Boolean,
  },
  setup(props) {
    const disabled = computed(() => !props.bookmark.url);
    const title = computed<string | undefined>(() => {
      if (!disabled.value) return undefined;
      return "No URL for this bookmark";
    });
    const path = computed<string>(
      () => `${props.parentPath} > ${props.bookmark.name}`
    );
    const { iconMap } = useConfig();
    const favicon = computed(() => {
      if (!props.bookmark.url) return NO_URL_ICON;
      if (iconMap.value[props.bookmark.url])
        return iconMap.value[props.bookmark.url];

      const url = new URL(props.bookmark.url);
      return `https://${url.host}/favicon.ico`;
    });

    return {
      disabled,
      title,
      path,
      favicon,
    };
  },
});
</script>

<style scoped>
/*
.Bookmark {

  .outer-link {

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
}*/
</style>
