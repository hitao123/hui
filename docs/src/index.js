import Vue from 'vue';
import VueRouter from 'vue-router';
import HDoc, { progress } from 'hui-doc';
import App from './DocsApp.vue';
import routes from './router';
import '../../packages/less/src/common/normalize.less';
import '../../packages/less/src/index.less';
import { isMobile } from './utils';

Vue.use(VueRouter).use(HDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    location.replace('mobile.html' + location.hash)
  } else {
    progress.start();
    document.title = route.meta.title || document.title;
    next();
  }
});

router.afterEach(() => {
  progress.done();
  window.scrollTo(0, 0);
  Vue.nextTick(() => window.syncPath());
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
