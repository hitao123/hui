// This file is auto gererated by build/bin/build-entry.js
import Button from './Button';
import Icon from './Icon';
import Toast from './Toast';

const components = [
  button,
  icon,
  toast
];

const install = Vue => {
  components.forEach(item => {
    Vue.use(item);
  });
}

if (window !== 'undefined' && window.Vue !== 'undefined') {
  install(window.Vue);
}

export {
  install,
  Button,
  Icon,
  Toast
};