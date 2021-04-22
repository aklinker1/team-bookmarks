import { computed, Ref } from "vue";
import { useStore } from "vuex";

export function useTree(path: Ref<string>) {
  const store = useStore();
  const isMinimized = computed(() => {
    if (path.value == null) return false;
    return !!store.state.tree[path.value];
  });
  const toggleMinimized = () => {
    store.commit("toggleMinimized", {
      path: path.value,
      isMinimized: !isMinimized.value,
    });
  };

  return {
    isMinimized,
    toggleMinimized,
  };
}
