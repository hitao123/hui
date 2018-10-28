import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Loading from '../index.vue';
import LoadingDemo from '../demo/index.vue';

describe('Loading component', () => {
  it('should Loading as Circular', () => {
    const warpper = shallowMount(Loading, {
      propsData: {
        type: 'spinner',
        color: 'white'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should Loading as Spinner', () => {
    expect(renderToString(LoadingDemo)).toMatchSnapshot();
  });
});
