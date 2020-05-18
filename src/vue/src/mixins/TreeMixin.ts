import Vue from 'vue';
import Utils from '@/Utils';

export default Vue.extend({
  computed: {
    isMinimized(): boolean {
      // @ts-ignore
      const path: string | undefined = this.path;
      if (path == null) return false;
      return this.$store.getters.isMinimized(path);
    },
    // isHidden(): boolean {
    //   // @ts-ignore
    //   const path: string | undefined = this.path;
    //   if (path == null) return false;
    //   return this.$store.getters.isHidden(path);
    // },
  },
  methods: {
    toggleMinimized(): void {
      // @ts-ignore
      const path: string | undefined = this.path;
      if (path == null) return;

      this.$store.commit('toggleMinimized', { path, isMinimized: !this.isMinimized });
      Utils.reloadGrid(this, 250);
    },
  },
});
