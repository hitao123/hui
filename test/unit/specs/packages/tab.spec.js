import { renderToString } from '@vue/server-test-utils';
import TabDemo from '../../../../docs/src/views/tab';

describe('Dialog component', () => {
  it('should show Button Demo', () => {
    expect(renderToString(TabDemo)).toMatchSnapshot();
  });
});
