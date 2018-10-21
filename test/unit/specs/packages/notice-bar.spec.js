import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import NoticeBar from '../../../../packages/notice-bar';
import NoticeBarDemo from '../../../../docs/src/views/noticebar';

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
