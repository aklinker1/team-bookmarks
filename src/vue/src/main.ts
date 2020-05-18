import Vue from 'vue';
import App from './App.vue';
import { VueMasonryPlugin } from 'vue-masonry';
import Ripple from 'vue-ripple-directive';
import Vuex from 'vuex';
import store from '@/vuex';

Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);

Ripple.color = 'rgba(150, 150, 150, 0.24)';
Vue.directive('ripple', Ripple);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
