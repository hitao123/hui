import Vue from 'vue';
import Router from 'vue-router';
import button from './views/button';
import toast from './views/toast';
import loading from './views/loading'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
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
    }
  ]
})
