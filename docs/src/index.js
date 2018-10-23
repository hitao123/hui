import Vue from 'vue';
import VueRouter from 'vue-router';
import VantDoc from 'vant-doc';
import App from './DocsApp.vue';
import routes from './router';
import '../../packages/less/common/normalize.less';
import '../../packages/less/index.less';

Vue.config.productionTip = false;
Vue.use(VueRouter).use(VantDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
