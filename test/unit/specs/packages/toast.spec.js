import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Toast from '../../../../packages/toast';
import ToastDemo from '../../../../docs/src/views/toast';

describe('Toast component', () => {
  it('should Loading as Circular', () => {
    const warpper = shallowMount(Toast, {
      propsData: {
        message: 'Toast',
        icon: 'wechat'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should Loading as Spinner', () => {
    expect(renderToString(ToastDemo)).toMatchSnapshot();
  });
});
