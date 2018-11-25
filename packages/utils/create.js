import createBasic from './create-basic';
import Loading from '../loading';
import Icon from '../icon';
import Cell from '../cell';
import CellGroup from '../cell-group';

export default function (opt) {
  opt.components = Object.assign(opt.components || {}, {}, {
    Loading,
    Icon,
    Cell,
    CellGroup
  });

  return createBasic(opt);
}
