import Vue from 'vue';
import HDialog from './dialog';

const DialogConstructor = Vue.extend(HDialog);

let instance = new DialogConstructor({
  el: document.createElement('div')
});

const Dialog = options => {
  return new Promise((resolve, reject) => {
    instance.$on('input', value => {
      instance.value = value;
    });

    document.body.appendChild(instance.$el);

    Object.assign(instance, {
      resolve,
      reject
    }, options);
  })
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = options => Dialog(
  Object.assign({}, Dialog.currentOptions, options)
  // 下面这种方式 即使在 babel 有配置依旧不能使用该操作符，坑了一天依旧没解决
  // ...Dialog.currentOptions,
  // ...options
);

Dialog.confirm = options => Dialog(
  Object.assign({}, Dialog.currentOptions, options)
);

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.install = () => {
  Vue.use(HDialog);
}

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = Object.assign({}, Dialog.defaultOptions);
};

Vue.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();

export default Dialog;
