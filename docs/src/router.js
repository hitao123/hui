import Vue from 'vue';
import Router from 'vue-router';
import indexList from './views/index';
import button from './views/button';
import toast from './views/toast';
import loading from './views/loading';
import icon from './views/icon';
import cell from './views/cell';
import popup from './views/popup';
import tab from './views/tab.vue';

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
    },
    {
      path: '/cell',
      name: 'cell',
      component: cell
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    }
  ]
})
