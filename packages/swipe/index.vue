<template>
  <div :class="bem('')">
    <div
      :style="trackStyle"
      :class="[bem('track'), 'clearfix']"
    >
      <slot></slot>
    </div>
    <div :class="bem('indicators', { vertical })">
      <i v-for="index in count" :key="index"
        :class="bem('indicator')"></i>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Touch from '../utils/mixins/touch';
// import { on, off } from '../utils/event';

export default create({
  name: 'swipe',
  mixins: [Touch],
  props: {
    vertical: Boolean,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      swipes: [],
      swiping: false
    }
  },
  computed: {
    trackStyle() {
      return {
        [this.vertical ? 'height' : 'width']: `${this.trackSize}px`,
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      }
    },
    count() {
      return this.swipes.length;
    },
    size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },

    trackSize() {
      return this.count * this.size;
    }
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
