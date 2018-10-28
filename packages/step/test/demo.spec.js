import { renderToString } from '@vue/server-test-utils';
import stepDemo from '../demo/index.vue';

describe('Dialog component', () => {
  it('should show Button Demo', () => {
    expect(renderToString(stepDemo)).toMatchSnapshot();
  });
});
