import Vue from 'vue';
import Router from 'vue-router';
import indexList from './views/index';
import button from './views/button';
import toast from './views/toast';
import loading from './views/loading';
import icon from './views/icon';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexList
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    }
  ]
})
