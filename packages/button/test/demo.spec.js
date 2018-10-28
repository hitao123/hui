import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Button from '../index.vue';
import ButtonDemo from '../demo/index.vue';

describe('Button component', () => {
  it('should show Button', () => {
    const warpper = shallowMount(Button, {
      propsData: {
        text: 'Button',
        block: false,
        plain: true,
        loading: false
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Button Demo', () => {
    expect(renderToString(ButtonDemo)).toMatchSnapshot();
  });
});
