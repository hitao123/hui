import createBasic from './create-basic';
import Loading from '../packages/loading';

export default function (opt) {
  opt.components = Object.assign(opt.components || {}, {}, {
    Loading
  });

  return createBasic(opt);
}
