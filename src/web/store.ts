import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist';

export const store = createStore({
  state: {
    darkMode: true,
    tree: {} as Record<string, boolean | undefined>,
    order: {} as Record<string, number>,
  },
  mutations: {
    toggleDarkMode(state, newValue: boolean): void {
      state.darkMode = newValue;
    },
    toggleMinimized(state, payload: { path: string, isMinimized: boolean }) {
      state.tree[payload.path] = payload.isMinimized;
    }
  },
  plugins: [new VuexPersistence().plugin]
});
