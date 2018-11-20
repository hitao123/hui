import Vue from 'vue';
import toast from './toast';
import { isObj } from '../utils';

const ToastConstructor = Vue.extend(toast);
let toastQueue = [];
let singleton = true;
const parseOptions = message => isObj(message) ? message : { message };

// 获取一个 toast 实例
let getAnInstance = () => {
  if (toastQueue.length > 0) {
    let instance = toastQueue.shift();
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  })
};

// 添加到队列
let addInstanceQueue = instance => {
  if (instance) {
    toastQueue.push(instance);
  }
}

// 删除结点
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
}

// 关闭 Toast
ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  addInstanceQueue(this);
}

/**
 * 暴露全局调用 Toast 方法
 * @param {*} options
 */
let Toast = (options = {}) => {
  let duration = options.duration || 3000;
  let instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  document.body.appendChild(instance.$el);

  Vue.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    instance.timer = setTimeout(function () {
      if (instance.closed) return;
      instance.close();
    }, duration);
  });
  return instance;
}

Toast.install = () => {
  Vue.use(toast);
};

const createMethod = type => options => Toast({
  type, options: Object.assign({}, parseOptions(options))
});

['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  if (toastQueue.length) {
    if (all) {
      toastQueue.forEach(toast => {
        toast.clear();
      });
      toastQueue = [];
    } else if (singleton) {
      toastQueue[0].clear();
    } else {
      toastQueue.shift().clear();
    }
  }
};

Vue.prototype.$toast = Toast;

export default Toast;
