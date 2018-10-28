import { renderToString } from '@vue/server-test-utils';
import TabDemo from '../demo/index.vue';

describe('Dialog component', () => {
  it('should show Button Demo', () => {
    expect(renderToString(TabDemo)).toMatchSnapshot();
  });
});
