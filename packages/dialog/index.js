import Vue from 'vue';
import HDialog from './dialog';

let instance

const initInstance = () => {
  instance = new (Vue.extend(HDialog))({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Dialog = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, {
      resolve,
      reject,
      ...options
    });
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

Dialog.alert = options => Dialog({
  // Object.assign({}, Dialog.currentOptions, options)
  // 下面这种方式 即使在 babel 有配置依旧不能使用该操作符，坑了一天依旧没解决，最后通过安装 babel-cli 解决了
  // 原理可以再看看
  ...Dialog.currentOptions,
  ...options
});

Dialog.confirm = options => Dialog({
  ...Dialog.currentOptions,
  showCancelButton: true,
  ...options
});

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
