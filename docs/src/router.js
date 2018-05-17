import Vue from 'vue';
import Router from 'vue-router';
import button from '../../packages/button/index.vue';
import index from '../../packages/icon/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'button',
      component: button
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
