import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import Hui from '../../packages';
import routes from './router';
import NProgress from 'NProgress';

import '../../packages/less/index.less';
import '../../packages/less/common/normalize.less';

Vue.use(VueRouter).use(Hui);

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

router.beforeEach((route, redirect, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
  // if (!router.currentRoute.redirectedFrom) {
  //   Vue.nextTick(() => window.syncPath());
  // }
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
