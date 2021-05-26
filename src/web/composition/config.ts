import { computed, onMounted, ref } from "vue";
import { Config } from "../../defineConfig";
// @ts-expect-error
import customConfig from "~bookmarks";
import { ICategory } from "../../types";

export function useConfig() {
  const config = ref<Config>(customConfig);
  const title = computed<string | undefined>(() => config.value?.title);
  const repoUrl = computed<string | undefined>(() => config.value?.repoUrl);
  const bookmarks = computed<ICategory[]>(() => config.value?.bookmarks ?? []);
  const iconMap = computed<Record<string, string>>(
    () => config.value?.iconMap ?? {}
  );

  return {
    config,
    title,
    repoUrl,
    bookmarks,
    iconMap,
  };
}
