import { computed, ref, watchEffect } from "vue";
import { RouteLocationRaw, useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Utils from "../Utils";

export function useTheme(applyThemeUpdates = false) {
  const store = useStore();

  const isDark = computed<boolean>(() => store.state.darkMode);
  const toggleTheme = () => {
    const newIsDark = !isDark.value;
    store.commit("toggleDarkMode", newIsDark);
  };
  const buttonLabel = computed<string>(() =>
    isDark.value ? "Light Theme" : "Dark Theme"
  );

  if (applyThemeUpdates) {
    watchEffect(() => {
      const html = document.querySelector("html");
      html?.classList[isDark.value ? "add" : "remove"]("dark");

      // Start transitioning theme colors after a short wait
      if (html && !html.classList.contains("transition-theme"))
      setTimeout(() => {
        html?.classList.add("transition-theme");
      }, 500);
    });
  }

  return {
    isDark,
    toggleTheme,
    buttonLabel,
  };
}
