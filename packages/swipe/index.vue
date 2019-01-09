<template>
  <div :class="bem('')">
    <div
      :style="trackStyle"
      :class="bem('track')"
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
import { off } from '../utils/event';

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
    }
  },
  data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
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
    trackSize() {
      return this.count * this.size;
    },
    activeIndicator() {
      return (this.active + this.count) % this.count;
    }
  },
  mounted() {
    this.initialize();
  },
  destroyed() {
    this.clear();
    if (!this.$isServer) {
      off(window, 'resize', function() { }, true);
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
    move(move = 0, offset = 0) {
      const { active, count, swipes, trackSize } = this;
      const atFirst = active === 0;
      const atLast = active === count - 1;
      // 这里不加，动画会不连续
      swipes[0].offset = atLast ? trackSize : 0;
      swipes[count - 1].offset = atFirst ? -trackSize : 0;

      if (move && active + move >= -1 && active + move <= count) {
        this.active += move;
      }

      this.offset = offset - this.active * this.size;
    },
    correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    autoPlay() {
      const { autoplay } = this;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(() => {
          this.swiping = true;
          this.correctPosition();
          // 递归达到同样效果 setInterval
          setTimeout(() => {
            this.swiping = false;
            this.move(1);
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    },
    clear() {
      clearTimeout(this.timer);
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
