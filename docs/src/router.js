// This file is auto gererated by build/bin/build-entry.js

import Vue from 'vue';
import Router from 'vue-router';
import Hui from '../../packages';
import indexList from './views/index';

import actionsheet from './views/actionsheet.vue'
import button from './views/button.vue'
import cell from './views/cell.vue'
import field from './views/field.vue'
import icon from './views/icon.vue'
import loading from './views/loading.vue'
import noticebar from './views/noticebar.vue'
import popup from './views/popup.vue'
import tab from './views/tab.vue'
import toast from './views/toast.vue'
import uploader from './views/uploader.vue'

Vue.use(Hui).use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      'path': '/actionsheet',
      'name': 'actionsheet',
      'component': actionsheet
    },
    {
      'path': '/button',
      'name': 'button',
      'component': button
    },
    {
      'path': '/cell',
      'name': 'cell',
      'component': cell
    },
    {
      'path': '/field',
      'name': 'field',
      'component': field
    },
    {
      'path': '/icon',
      'name': 'icon',
      'component': icon
    },
    {
      'path': '/loading',
      'name': 'loading',
      'component': loading
    },
    {
      'path': '/noticebar',
      'name': 'noticebar',
      'component': noticebar
    },
    {
      'path': '/popup',
      'name': 'popup',
      'component': popup
    },
    {
      'path': '/tab',
      'name': 'tab',
      'component': tab
    },
    {
      'path': '/toast',
      'name': 'toast',
      'component': toast
    },
    {
      'path': '/uploader',
      'name': 'uploader',
      'component': uploader
    },
    {
      'path': '/',
      'name': 'index',
      'component': indexList
    }
  ]
});
