import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import NoticeBar from '../index.vue';
import NoticeBarDemo from '../demo/index.vue';

describe('NoticeBar component', () => {
  it('should show NoticeBar', () => {
    const warpper = shallowMount(NoticeBar, {
      propsData: {
        text: 'title is long'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Button Demo', () => {
    expect(renderToString(NoticeBarDemo)).toMatchSnapshot();
  });
});
