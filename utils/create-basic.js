import { isDef } from './';
import bem from './mixins/bem';

const install = function (Vue) {
  Vue.component(this.name, name);
}

export default function (opt) {
  opt.name = 'h-' + opt.name;
  opt.install = opt.install || install;
  opt.mixins = opt.mixins || [];
  opt.mixins.push(bem);
  opt.methods = opt.methods || {};
  opt.methods.isDef = isDef;
  return opt;
};
