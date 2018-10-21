import { renderToString } from '@vue/server-test-utils';
import stepDemo from '../../../../docs/src/views/step';

describe('Dialog component', () => {
  it('should show Button Demo', () => {
    expect(renderToString(stepDemo)).toMatchSnapshot();
  });
});
