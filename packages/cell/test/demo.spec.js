import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Cell from '../index.vue';
import CellDemo from '../demo/index.vue';

describe('Cell component', () => {
  it('should show Cell', () => {
    const warpper = shallowMount(Cell, {
      propsData: {
        title: 'Cell'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show CellDemo', () => {
    expect(renderToString(CellDemo)).toMatchSnapshot();
  });
});
