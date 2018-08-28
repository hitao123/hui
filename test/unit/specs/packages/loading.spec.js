import { shallowMount } from '@vue/test-utils';
import Loading from '../../../../packages/loading';

describe('Loading component', () => {
  it('should Loading as Circular', () => {
    const warpper = shallowMount(Loading);
    warpper.find('svg');
    expect(warpper.find('svg').classes()).toEqual(['h-loading__circular']);
  });

  it('should Loading as Spinner', () => {
    const warpper = shallowMount(Loading);
    warpper.find('svg');
    expect(warpper.find('svg').classes()).toEqual(['h-loading__circular']);
  });
});
