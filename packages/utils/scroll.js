import { isServer } from './';

export default {
  getScrollEventTarget(element, rootParent) {

  },
  getScrollTop(element) {

  },
  setScrollTop() {

  },
  getElementTop(element) {
    return element === window ? 0 : element.getBoundingClientRect().top;
  },
  getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: !isServer && document.defaultView.getComputedStyle
}
