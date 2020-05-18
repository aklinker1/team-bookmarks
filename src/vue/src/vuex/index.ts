import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import persistence from './persistence';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [persistence.plugin],
});
