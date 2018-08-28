// This file is auto gererated by build/bin/build-entry.js
import Button from './button';
import Icon from './icon';
import Toast from './toast';

var components = [
  Button,
  Icon,
  Toast
];

var install = Vue => {
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
