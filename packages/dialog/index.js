import Vue from 'vue';
import HDialog from './dialog.vue';

const DialogConstructor = Vue.extend(HDialog);

let instance = new DialogConstructor({
  el: document.createElement('div')
});

const Dialog = options => {
  return new Promise((resolve, reject) => {
    document.body.appendChild(instance.$el);

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
  ...options
});

Dialog.confirm = options => Dialog({
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

Vue.prototype.$dialog = Dialog;

export default Dialog;
