import { shallowMount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import Dialog from '../dialog.vue';
import DialogDemo from '../demo/index.vue';

describe('Dialog component', () => {
  it('should show Dialog', () => {
    const warpper = shallowMount(Dialog, {
      propsData: {
        title: 'title',
        cancelButtonText: 'cancel',
        confirmButtonText: 'confirm'
      }
    });
    expect(warpper.html()).toMatchSnapshot();
  });

  it('should show Button Demo', () => {
    expect(renderToString(DialogDemo)).toMatchSnapshot();
  });
});
