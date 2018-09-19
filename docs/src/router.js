// This file is auto gererated by build/bin/build-entry.js

import Vue from 'vue';
import Router from 'vue-router';
import Hui from '../../packages';
import indexList from './views/index';

import actionsheet from './views/actionsheet.vue'
import button from './views/button.vue'
import cell from './views/cell.vue'
import col from './views/col.vue'
import dialog from './views/dialog.vue'
import field from './views/field.vue'
import icon from './views/icon.vue'
import loading from './views/loading.vue'
import noticebar from './views/noticebar.vue'
import numberkeyboard from './views/numberkeyboard.vue'
import picker from './views/picker.vue'
import popup from './views/popup.vue'
import pullrefresh from './views/pullrefresh.vue'
import radio from './views/radio.vue'
import rate from './views/rate.vue'
import smsinput from './views/smsinput.vue'
import step from './views/step.vue'
import stepper from './views/stepper.vue'
import swipe from './views/swipe.vue'
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
      'path': '/col',
      'name': 'col',
      'component': col
    },
    {
      'path': '/dialog',
      'name': 'dialog',
      'component': dialog
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
      'path': '/numberkeyboard',
      'name': 'numberkeyboard',
      'component': numberkeyboard
    },
    {
      'path': '/picker',
      'name': 'picker',
      'component': picker
    },
    {
      'path': '/popup',
      'name': 'popup',
      'component': popup
    },
    {
      'path': '/pullrefresh',
      'name': 'pullrefresh',
      'component': pullrefresh
    },
    {
      'path': '/radio',
      'name': 'radio',
      'component': radio
    },
    {
      'path': '/rate',
      'name': 'rate',
      'component': rate
    },
    {
      'path': '/smsinput',
      'name': 'smsinput',
      'component': smsinput
    },
    {
      'path': '/step',
      'name': 'step',
      'component': step
    },
    {
      'path': '/stepper',
      'name': 'stepper',
      'component': stepper
    },
    {
      'path': '/swipe',
      'name': 'swipe',
      'component': swipe
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
