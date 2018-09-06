import Vue from 'vue';
import Modal from './Modal';
import context from './context';

export default {
  open(vm, config) {
    const el = vm.$el;
    const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
    context.stack.push({ vm, config, targetNode });
    this.update();
  },
  close() {

  },
  update() {
    let { modal } = context;
    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (context.top) {
      const { targetNode, config } = context.top;
      targetNode.appendChild(modal.$el);
      console.log(modal, config, typeof modal);
      Object.assign(modal, {
        visible: true
      });
      // Object.assign(modal, {
      //   ...config,
      //   visible: true
      // });
    }
  },
  onClick() {

  }
}
