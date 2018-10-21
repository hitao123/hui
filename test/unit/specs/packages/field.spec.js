import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Field from '../../../../packages/field';
import FieldDemo from '../../../../docs/src/views/field';

describe('Field component', () => {
  it('should show Field', () => {
    const warpper = shallowMount(Field, {
      propsData: {
        label: '姓名',
        placeholder: '请输入姓名'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Field Demo', () => {
    expect(renderToString(FieldDemo)).toMatchSnapshot();
  });
});
