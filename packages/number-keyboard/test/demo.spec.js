import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import numberKeyboard from '../index.vue';
import numberKeyboardDemo from '../demo/index.vue';

describe('Dialog component', () => {
  it('should show Dialog', () => {
    const warpper = shallowMount(numberKeyboard, {
      propsData: {
        closeButtonText: 'close'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Button Demo', () => {
    expect(renderToString(numberKeyboardDemo)).toMatchSnapshot();
  });
});
