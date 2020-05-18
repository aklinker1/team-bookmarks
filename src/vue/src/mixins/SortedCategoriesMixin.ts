import Vue from 'vue';
import BookmarksData from '@/bookmarks';

export default Vue.extend({
  computed: {
    sortedCategories() {
      const sortedOrder = this.$store.getters.sortOrder;
      return [...BookmarksData].sort((l, r) => {
        const lOrder = sortedOrder[l.name];
        const rOrder = sortedOrder[r.name];
        if (lOrder != null && rOrder != null) {
          return lOrder - rOrder;
        }
        if (lOrder != null) {
          return 1;
        }
        if (rOrder != null) {
          return -1;
        }
        return 0;
      });
    },
  },
});
