import Vue from 'vue';

export default Vue.extend({
  computed: {
    lightTheme(): boolean {
      return this.$store.getters.isLightTheme;
    },
    rippleColor(): string {
      if (this.lightTheme) {
        return 'rgba(0, 0, 0, 0.12)';
      }
      return 'rgba(255, 255, 255, 0.12)';
    },
    iconColor(): string {
      if (this.lightTheme) {
        return 'rgba(0, 0, 0, 0.38)';
      }
      return 'rgba(255, 255, 255, 0.38)';
    },
  },
  methods: {
    changeTheme(theme: 'light' | 'dark'): void {
      this.$store.commit('changeTheme', theme === 'light');
    },
  },
});
