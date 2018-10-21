import { shallowMount } from '@vue/test-utils';
import passwordInput from '../../../../packages/password-input';

describe('Dialog component', () => {
  it('should show Dialog', () => {
    const warpper = shallowMount(passwordInput, {
      propsData: {
        value: '1234'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });
});
