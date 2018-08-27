import createBasic from './create-basic';
import Loading from '../packages/loading';
import Icon from '../packages/icon';

export default function (opt) {
  opt.components = Object.assign(opt.components || {}, {}, {
    Loading,
    Icon
  });

  return createBasic(opt);
}
