import '../../packages/less/index.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './routerM';
import NProgress from 'NProgress';

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
