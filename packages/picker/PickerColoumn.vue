<template>
  <div
    :class="bem('')"
    @touchstart="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul :style="wrapperStyle">
      <li
        v-for="(option, index) in options"
        :key="index"
        v-html="option"
        class="h-ellipsis"
        :class="bem('item', {
          selected: index === currentIndex
        })"
        :style="optionStyle"
        @click="setIndex(index, true)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import create from '../utils/create';
import { range, isObj } from '../utils';

const DEFAULT_DURATION = 200;

export default create({
  name: 'picker-coloumn',
  props: {
    itemHeight: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: this.initialOptions,
      currentIndex: this.defaultIndex
    }
  },
  computed: {
    count() {
      return this.options.length;
    },
    baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },
    wrapperStyle() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
        lineHeight: this.itemHeight + 'px'
      }
    },
    optionStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    }
  },
  created() {
    this.$parent.children && this.$parent.children.push(this);
  },
  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove(event) {
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      );
    },
    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        const index = range(
          Math.round(-this.offset / this.itemHeight),
          0,
          this.count - 1
        );
        this.setIndex(index, true);
      }
    },
    isDisabled(option) {
      return isObj(option) && option.disabled;
    },
    setIndex(index, useAction) {

    },
    setValue() {

    },
    getValue() {

    },
    getOptionText() {

    },
    adjustIndex() {

    }
  }
})
</script>
