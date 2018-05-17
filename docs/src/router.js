import Vue from 'vue';
import Router from 'vue-router';
import button from '../demos/views/button.vue';
import index from '../demos/views/toast.vue';

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
