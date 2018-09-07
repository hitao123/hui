// This file is auto gererated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import Cellgroup from './cellgroup';
import Datetimepicker from './datetimepicker';
import Dialog from './dialog';
import Field from './field';
import Icon from './icon';
import Less from './less';
import Loading from './loading';
import Picker from './picker';
import Popup from './popup';
import Swipe from './swipe';
import Tab from './tab';
import Tabs from './tabs';
import Toast from './toast';
import Utils from './utils';

const components = [
  Actionsheet,
  Button,
  Cell,
  Cellgroup,
  Datetimepicker,
  Dialog,
  Field,
  Icon,
  Less,
  Loading,
  Picker,
  Popup,
  Swipe,
  Tab,
  Tabs,
  Toast,
  Utils
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
  Actionsheet,
  Button,
  Cell,
  Cellgroup,
  Datetimepicker,
  Dialog,
  Field,
  Icon,
  Less,
  Loading,
  Picker,
  Popup,
  Swipe,
  Tab,
  Tabs,
  Toast,
  Utils
};
