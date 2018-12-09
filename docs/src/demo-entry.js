// This file is auto gererated by build/bin/build-entry.js

function wrapper(promise, name) {
  return promise.then(component => {
    component = component.default;
    component.name = 'demo-' + name;
    return component;
  });
}

export default {
  'actionsheet': () => wrapper(import('../../packages/actionsheet/demo'), 'actionsheet'),
  'button': () => wrapper(import('../../packages/button/demo'), 'button'),
  'cell': () => wrapper(import('../../packages/cell/demo'), 'cell'),
  'checkbox': () => wrapper(import('../../packages/checkbox/demo'), 'checkbox'),
  'col': () => wrapper(import('../../packages/col/demo'), 'col'),
  'collapse': () => wrapper(import('../../packages/collapse/demo'), 'collapse'),
  'datetime-picker': () => wrapper(import('../../packages/datetime-picker/demo'), 'datetime-picker'),
  'dialog': () => wrapper(import('../../packages/dialog/demo'), 'dialog'),
  'field': () => wrapper(import('../../packages/field/demo'), 'field'),
  'icon': () => wrapper(import('../../packages/icon/demo'), 'icon'),
  'lazyload': () => wrapper(import('../../packages/lazyload/demo'), 'lazyload'),
  'list': () => wrapper(import('../../packages/list/demo'), 'list'),
  'loading': () => wrapper(import('../../packages/loading/demo'), 'loading'),
  'nav-bar': () => wrapper(import('../../packages/nav-bar/demo'), 'nav-bar'),
  'notice-bar': () => wrapper(import('../../packages/notice-bar/demo'), 'notice-bar'),
  'number-keyboard': () => wrapper(import('../../packages/number-keyboard/demo'), 'number-keyboard'),
  'password-input': () => wrapper(import('../../packages/password-input/demo'), 'password-input'),
  'picker': () => wrapper(import('../../packages/picker/demo'), 'picker'),
  'popup': () => wrapper(import('../../packages/popup/demo'), 'popup'),
  'pull-refresh': () => wrapper(import('../../packages/pull-refresh/demo'), 'pull-refresh'),
  'radio': () => wrapper(import('../../packages/radio/demo'), 'radio'),
  'rate': () => wrapper(import('../../packages/rate/demo'), 'rate'),
  'search': () => wrapper(import('../../packages/search/demo'), 'search'),
  'sms-input': () => wrapper(import('../../packages/sms-input/demo'), 'sms-input'),
  'stepper': () => wrapper(import('../../packages/stepper/demo'), 'stepper'),
  'steps': () => wrapper(import('../../packages/steps/demo'), 'steps'),
  'swipe': () => wrapper(import('../../packages/swipe/demo'), 'swipe'),
  'switch': () => wrapper(import('../../packages/switch/demo'), 'switch'),
  'switch-cell': () => wrapper(import('../../packages/switch-cell/demo'), 'switch-cell'),
  'tab': () => wrapper(import('../../packages/tab/demo'), 'tab'),
  'toast': () => wrapper(import('../../packages/toast/demo'), 'toast'),
  'uploader': () => wrapper(import('../../packages/uploader/demo'), 'uploader')
};
