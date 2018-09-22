import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import numberKeyboard from '../../../../packages/number-keyboard';
import numberKeyboardDemo from '../../../../docs/src/views/numberkeyboard';

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
