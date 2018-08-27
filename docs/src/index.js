import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '../../packages/less/common/normalize.less';
import '../../packages/less/index.less';

Vue.config.productionTip = false;

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  components: { App },
  el: '#app'
});
