import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import Hui from '../../packages';
import routes from './router';
import { DemoBlock, DemoSection, progress } from 'hui-doc';
import './utils/touch-simulator';
import '../../packages/less/src/common/normalize.less';
import '../../packages/less/src/index.less';

Vue.use(VueRouter).use(Hui);
Vue.component('demo-block', DemoBlock);
Vue.component('demo-section', DemoSection);

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

router.beforeEach((route, redirect, next) => {
  progress.start();
  next();
});

router.afterEach(() => {
  progress.done();
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
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
