import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Icon from '../../../../packages/icon';
import IconDemo from '../../../../docs/src/views/icon';

describe('Icon component', () => {
  it('should show Icon', () => {
    const warpper = shallowMount(Icon, {
      propsData: {
        name: 'add'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show IconDemo', () => {
    expect(renderToString(IconDemo)).toMatchSnapshot();
  });
});
