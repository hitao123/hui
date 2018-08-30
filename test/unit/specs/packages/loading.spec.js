import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Loading from '../../../../packages/loading';
import LoadingDemo from '../../../../docs/src/views/loading';

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
