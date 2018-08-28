import { shallowMount } from '@vue/test-utils';
import Icon from '../../../../packages/icon';

describe('Loading component', () => {
  it('should Loading as Circular', () => {
    const warpper = shallowMount(Icon);
    expect(warpper).toBeDefined();
  });

  it('should Loading as Spinner', () => {
    const warpper = shallowMount(Icon);
    expect(warpper).toBeDefined();
  });
});
