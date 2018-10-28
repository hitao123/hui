import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Actionsheet from '../index.vue';
import ActionsheetDemo from '../demo/index.vue';

describe('Actionsheet component', () => {
  it('should show Actionsheet', () => {
    const warpper = shallowMount(Actionsheet, {
      propsData: {
        title: 'actionsheet',
        actions: [
          {
            name: '打开相机'
          },
          {
            name: '选择照片',
            subname: 'tips'
          },
          {
            loading: true
          }
        ]
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Actionsheet Demo', () => {
    expect(renderToString(ActionsheetDemo)).toMatchSnapshot();
  });
});
