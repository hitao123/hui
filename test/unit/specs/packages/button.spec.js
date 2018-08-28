import { shallowMount } from '@vue/test-utils';
import Button from '../../../../packages/button';

describe('Loading component', () => {
  it('should Loading as Circular', () => {
    const warpper = shallowMount(Button);
    warpper.find('svg');
    expect(warpper.find('svg')).toBeDefined();
  });

  it('should Loading as Spinner', () => {
    const warpper = shallowMount(Button);
    expect(warpper.find('svg')).toBeDefined();
  });
});
