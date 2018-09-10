// This file is auto gererated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import Cellgroup from './cellgroup';
import Datetimepicker from './datetimepicker';
import Dialog from './dialog';
import Field from './field';
import Icon from './icon';
import Loading from './loading';
import NoticeBar from './notice-bar';
import Picker from './picker';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Rate from './rate';
import Step from './step';
import Stepper from './stepper';
import Swipe from './swipe';
import Tab from './tab';
import Tabs from './tabs';
import Toast from './toast';
import Uploader from './uploader';

const components = [
  Actionsheet,
  Button,
  Cell,
  Cellgroup,
  Datetimepicker,
  Dialog,
  Field,
  Icon,
  Loading,
  NoticeBar,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Step,
  Stepper,
  Swipe,
  Tab,
  Tabs,
  Toast,
  Uploader
];

const install = Vue => {
  components.forEach(item => {
    Vue.use(item);
  });
}

if (window !== 'undefined' && window.Vue) {
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
  Loading,
  NoticeBar,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Step,
  Stepper,
  Swipe,
  Tab,
  Tabs,
  Toast,
  Uploader
};

export default {
  install
};
