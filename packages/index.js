// This file is auto gererated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import HandWriting from './hand-writing';
import Icon from './icon';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import List from './list';
import Loading from './loading';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import NumberKeyboard from './number-keyboard';
import PasswordInput from './password-input';
import Picker from './picker';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Rate from './rate';
import Row from './row';
import Search from './search';
import SmsInput from './sms-input';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabs from './tabs';
import TextMask from './text-mask';
import Toast from './toast';
import Uploader from './uploader';

const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Field,
  HandWriting,
  Icon,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  PasswordInput,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  SmsInput,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  TextMask,
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
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  DatetimePicker,
  Dialog,
  Field,
  HandWriting,
  Icon,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  PasswordInput,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  SmsInput,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  TextMask,
  Toast,
  Uploader
};

export default {
  install
};
