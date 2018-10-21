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
  'col': () => wrapper(import('../../packages/col/demo'), 'col'),
  'datetimepicker': () => wrapper(import('../../packages/datetimepicker/demo'), 'datetimepicker'),
  'dialog': () => wrapper(import('../../packages/dialog/demo'), 'dialog'),
  'field': () => wrapper(import('../../packages/field/demo'), 'field'),
  'icon': () => wrapper(import('../../packages/icon/demo'), 'icon'),
  'list': () => wrapper(import('../../packages/list/demo'), 'list'),
  'loading': () => wrapper(import('../../packages/loading/demo'), 'loading'),
  'notice-bar': () => wrapper(import('../../packages/notice-bar/demo'), 'notice-bar'),
  'number-keyboard': () => wrapper(import('../../packages/number-keyboard/demo'), 'number-keyboard'),
  'password-input': () => wrapper(import('../../packages/password-input/demo'), 'password-input'),
  'picker': () => wrapper(import('../../packages/picker/demo'), 'picker'),
  'popup': () => wrapper(import('../../packages/popup/demo'), 'popup'),
  'pull-refresh': () => wrapper(import('../../packages/pull-refresh/demo'), 'pull-refresh'),
  'radio': () => wrapper(import('../../packages/radio/demo'), 'radio'),
  'radio-group': () => wrapper(import('../../packages/radio-group/demo'), 'radio-group'),
  'rate': () => wrapper(import('../../packages/rate/demo'), 'rate'),
  'row': () => wrapper(import('../../packages/row/demo'), 'row'),
  'sms-input': () => wrapper(import('../../packages/sms-input/demo'), 'sms-input'),
  'step': () => wrapper(import('../../packages/step/demo'), 'step'),
  'stepper': () => wrapper(import('../../packages/stepper/demo'), 'stepper'),
  'steps': () => wrapper(import('../../packages/steps/demo'), 'steps'),
  'swipe': () => wrapper(import('../../packages/swipe/demo'), 'swipe'),
  'swipe-item': () => wrapper(import('../../packages/swipe-item/demo'), 'swipe-item'),
  'tab': () => wrapper(import('../../packages/tab/demo'), 'tab'),
  'tabs': () => wrapper(import('../../packages/tabs/demo'), 'tabs'),
  'toast': () => wrapper(import('../../packages/toast/demo'), 'toast'),
  'uploader': () => wrapper(import('../../packages/uploader/demo'), 'uploader')
};
