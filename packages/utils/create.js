import createBasic from './create-basic';
import Loading from '../loading';
import Icon from '../icon';

export default function (opt) {
  opt.components = Object.assign(opt.components || {}, {}, {
    Loading,
    Icon
  });

  return createBasic(opt);
}
