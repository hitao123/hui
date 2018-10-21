<template>
  <div :class="bem('')">
    <slot></slot>
    <div v-show="loading" :class="bem('loading')">
      <slot name="loading">
        <loading />
        <span :class="bem('text')">{{ loadingText || '加载中...' }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Utils from '../utils/scroll';
import { on, off } from '../utils/event';

export default create({
  name: 'list',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },
  watch: {
    loading() {
      this.$nextTick(this.check)
    },
    finished() {
      this.$nextTick(this.check)
    }
  },
  mounted() {
    this.scroller = Utils.getScrollEventTarget(this.$el);
    this.handler(true);
    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed() {
    this.handler(false);
  },
  methods: {
    check() {
      if (this.loading || this.finished) {
        return;
      }

      const el = this.$el;
      const { scroller } = this;
      const scrollHeight = Utils.getVisibleHeight(scroller);

      if (!scrollHeight || Utils.getComputedStyle(el).display === 'none' || scroller.offsetPareent === null) {
        return;
      }

      // const scrollTop = Utils.getScrollTop(scroller);
      // const targetBottom = scrollTop + scrollHeight;

      let reachBottom = false;

      const elBottom = Utils.getElementTop(el) - Utils.getElementTop(scroller) + Utils.getVisibleHeight(el);
      reachBottom = elBottom - scrollHeight < this.offset;

      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler(bind) {
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.check)
      }
    }
  }
})
</script>
