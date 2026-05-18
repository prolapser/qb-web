import Vue from 'vue';
import './plugins/i18n';
import './plugins/composition-api';
import vuetify from './plugins/vuetify';

import store from './store';
// import router from './router';
import './filters';
import './directives';
import './locale';

import './buildInfo';

import App from './App.vue';

import './assets/mdi.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
