<template>
  <div :class="bem('')">
    <div
      :style="trackStyle"
      :class="bem('track')"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <slot></slot>
    </div>
    <div v-if="showIndicators && count > 1" :class="bem('indicators', { vertical })">
      <i v-for="index in count" :key="index"
        :class="bem('indicator', { active: index - 1 === activeIndicator })"></i>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Touch from '../utils/mixins/touch';
import { on, off, preventDefault } from '../utils/event';

export default create({
  name: 'swipe',
  mixins: [Touch],
  props: {
    vertical: Boolean,
    autoplay: Number,
    loop: {
      type: Boolean,
      default: true
    },
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
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      deltaX: 0,
      deltaY: 0,
      active: 0,
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
    delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    trackSize() {
      return this.count * this.size;
    },
    activeIndicator() {
      return (this.active + this.count) % this.count;
    }
  },
  mounted() {
    this.initialize();

    if (!this.$isServer) {
      on(window, 'resize', this.onResize, true);
    }
  },
  destroyed() {
    this.clear();
    if (!this.$isServer) {
      off(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes() {
      this.initialize();
    },
    autoplay(autoplay) {
      if (!autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  methods: {
    initialize() {
      clearTimeout(this.timer);
      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }
      this.swiping = true;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    move({ pace = 0, offset = 0 }) {
      const { active, count, swipes, trackSize, delta } = this;
      const atFirst = active === 0;
      const atLast = active === count - 1;
      const outOfBounds = (atFirst && (offset > 0 || pace < 0)) || (atLast && (offset > 0 || pace > 0))

      if (outOfBounds || count <= 1) {
        return;
      }

      if (swipes[0]) {
        swipes[0].offset = atLast && (delta < 0 || pace > 0) ? trackSize : 0;
      }

      if (swipes[count - 1]) {
        swipes[count - 1].offset = atFirst && (delta > 0 || pace < 0) ? -trackSize : 0;
      }

      if (pace && active + pace >= -1 && active + pace <= count) {
        this.active += pace;
      }

      this.offset = offset - this.active * this.size;
    },
    correctPosition() {
      if (this.active <= -1) {
        this.move({ pace: this.count });
      }
      if (this.active >= this.count) {
        this.move({ pace: -this.count });
      }
    },
    autoPlay() {
      const { autoplay } = this;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(() => {
          this.swiping = true;
          this.resetTouchStatus();
          this.correctPosition();
          setTimeout(() => {
            this.swiping = false;
            this.move({ pace: 1 });
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    },
    clear() {
      clearTimeout(this.timer);
    },
    onTouchStart(event) {
      if (!this.touchable) {
        return;
      }
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove(event) {
      if (!this.touchable || !this.swiping) {
        return;
      }
      this.touchMove(event);
      preventDefault(event, true);
      this.move({ offset: Math.min(Math.max(this.delta, -this.size), this.size) })
    },
    onTouchEnd(event) {
      if (!this.touchable || !this.swiping) {
        return;
      }

      if (this.delta) {
        const offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({ pace: offset > 0 ? (this.delta > 0 ? -1 : 1) : 0 })
      }

      this.swiping = false;
      this.autoPlay();
    },
    onResize() {
      this.initialize();
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
