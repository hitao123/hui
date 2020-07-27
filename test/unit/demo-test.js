import Vue from 'vue';
import { renderToString } from '@vue/server-test-utils';
import hui from '../../packages';

const empty = {
  template: '<div><slot></slot></div>',
  inheritAttrs: false
};

Vue.component('demo-block', empty);
Vue.component('demo-section', empty);
Vue.use(hui);

export default function(Demo) {
  test(`renders demo correctly`, () => {
    expect(renderToString(Demo)).toMatchSnapshot();
  });
};
