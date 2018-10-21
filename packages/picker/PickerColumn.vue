<template>
  <div
    :class="bem('')"
    :style="columnStyle"
    @touchstart="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul :style="wrapperStyle">
      <li
        v-for="(option, index) in options"
        :key="index"
        v-html="getOptionText(option)"
        class="h-ellipsis"
        :class="bem('item', {
          selected: index === currentIndex,
          disabled: isDisabled(option)
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
  name: 'picker-column',
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
    },
    valueKey: String
  },
  data() {
    return {
      startY: 0, // 点击开始的位置
      offset: 0, // 偏移量
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
    columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
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
      // 两次触点移动距离
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(
        this.startOffset + deltaY,
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
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;
      if (index !== this.currentIndex) {
        this.currentIndex = index;
        useAction && this.$emit('change', index);
      }
    },
    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
        }
      }
    },
    getValue() {
      return this.options[this.currentIndex];
    },
    getOptionText(option) {
      if (isObj(option) && this.valueKey in option) {
        return option[this.valueKey]
      }
      return option;
    },
    adjustIndex(index) {
      index = range(index, 0, this.count);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }

      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    }
  }
})
</script>
