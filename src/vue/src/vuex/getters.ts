import { as } from '@/Utils';
import { GetterTree } from 'vuex';

export default as<GetterTree<VuexState, VuexState>>({
  isLightTheme({ isLightTheme }): boolean {
    return isLightTheme;
  },
  sortOrder({ sortOrder }): SortOrderMap {
    return sortOrder;
  },
  isMinimized({ minimizedPaths }) {
    return (path: string): boolean => {
      return minimizedPaths[path] === true;
    };
  },
});
