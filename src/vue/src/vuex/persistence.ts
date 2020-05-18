import VuexPersistence from 'vuex-persist';

export default new VuexPersistence<VuexState>({
  storage: window.localStorage,
});
