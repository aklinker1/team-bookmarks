import Vue from 'vue';
import { as } from '@/Utils';
import { MutationTree } from 'vuex';

export default as<MutationTree<VuexState>>({
  changeTheme(store, isLightTheme: boolean) {
    store.isLightTheme = isLightTheme;
  },
  updateCategoryOrder(store, orderMap: SortOrderMap) {
    store.sortOrder = orderMap;
  },
  toggleMinimized(store, { path, isMinimized }: { path: string; isMinimized: boolean }) {
    Vue.set(store.minimizedPaths, path, isMinimized);
  },
});
