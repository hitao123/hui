<template>
  <div :class="bem('')">
    <div
      :class="bem('track')"
      :style="style"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <div :class="bem('head')">
        <slot v-if="status === 'normal'" name="normal"></slot>
        <slot v-if="status === 'pulling'" name="pulling">
          <span :class="bem('text')">{{ pullingText || '上拉刷新...' }}</span>
        </slot>
        <slot v-if="status === 'loosing'" name="loosing">
          <span :class="bem('text')">{{ loosingText || '释放刷新...' }}</span>
        </slot>
        <slot v-if="status === 'loading'" name="loading">
          <div :class="bem('loading')">
            <loading />
            <span :class="bem('text')">{{ loadingText || '加载中' }}</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import scrollUtil from '../utils/scroll';
import Touch from '../utils/mixins/touch';

export default create({
  name: 'pull-refresh',
  mixins: [Touch],
  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      default: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    }
  },
  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${this.height}px, 0)`
      }
    },
    untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  watch: {
    value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },
  mounted() {
    this.scrollEl = scrollUtil.getScrollEventTarget(this.$el);
  },
  methods: {
    getCeiling() {
      this.ceiling = scrollUtil.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    onTouchStart(event) {
      if (this.untouchable) {
        return;
      }
      if (this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event)
      }
    },
    onTouchMove() {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);
      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },
    onTouchEnd() {
      if (this.untouchable) {
        return;
      }
      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    ease(height) {
      const { headHeight } = this;
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4)
    },
    getStatus(height, isLoading) {
      this.height = height;
      const status = isLoading ? 'loading' : (height === 0 ? 'normal' : (height < this.headHeight ? 'pulling' : 'loosing'));

      if (this.status !== status) {
        this.status = status;
      }
    }
  }
});
</script>
