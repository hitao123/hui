import context from './context';
import manager from './manager';
import Touch from '../touch';

export default {
  mixins: [Touch],
  props: {
    // 控制显示 v-model
    value: Boolean,
    // 控制遮罩显示
    overlay: Boolean,
    // 遮罩样式
    overlayStyle: Object,
    // 遮罩样式
    overlayClass: Object,
    zIndex: [String, Number]
  },
  data() {
    return {
      inited: this.value
    }
  },
  mounted() {
    if (this.value) {
      this.open();
    }
  },
  methods: {
    open() {
      if (this.$isServer) {
        return;
      }
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      this.renderOverlay();
    },
    close() {

    },
    renderOverlay() {
      if (this.overlay) {
        manager.open(this, {
          zIndex: context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }

      this.$nextTick(() => {
        this.$el.style.zIndex = context.plusKey('zIndex');
      });
    }
  },
  watch: {
    value(val) {
      this.inited = this.inited || this.value;
      this[val ? 'open' : 'close']();
    }
  }
}
