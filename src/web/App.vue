<template>
  <div class="px-8 flex flex-col items-center space-y-24 pt-8 pb-24">
    <h1
      v-if="!!title"
      class="text-3xl text-center text-opacity-60 dark:text-opacity-30 font-medium"
    >
      {{ title }}
    </h1>

    <div class="self-stretch">
        <Masonary ref="masonary" class="mx-auto" itemSelector=".masonary-item" isFitWidth :gutter="16">
          <div v-for="category of bookmarks" :key="category.name" class="masonary-item w-80 mb-4">
            <category :category="category" @reloadGrid="reload" />
          </div>
        </Masonary>
    </div>

    <div class="px-16 flex flex-col items-center space-y-4">
      <div class="space-x-4">
        <button v-if="false" @click.prevent>Change <strong>Sort Order</strong></button>
        <button @click="toggleTheme">
          Switch to <strong>{{ themeButtonLabel }}</strong>
        </button>
      </div>
      <p v-if="!!repoUrl" class="text-opacity-60 dark:text-opacity-50">
        Served from: <a class="link" :href="repoUrl">{{ repoUrl }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { useTheme } from "./composition/theme";
import { useConfig } from "./composition/config";
import Masonary from "./components/Masonary.vue";
import Category from "./components/Category.vue";

export default defineComponent({
  components: {
    Masonary,
    Category,
  },
  setup() {
    const { toggleTheme, buttonLabel: themeButtonLabel } = useTheme(true);
    const { title, repoUrl, bookmarks } = useConfig();
    watchEffect(() => {
      document.title = title.value ?? "";
    });

    const masonary = ref<any | null>(null);
    const reload = () => {
      setTimeout(() => {
        masonary.value?.masonary.layout()
      }, 250);
    }

    return {
      themeButtonLabel,
      toggleTheme,
      title,
      repoUrl,
      bookmarks,
      reload,
      masonary,
    };
  },
});
</script>
