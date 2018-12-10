<template>
  <div :class="bem('')">
    <svg v-for="(isFull, index) in list" :key="index"
      viewBox="0 0 32 32"
      :style="style"
      :class="bem('item')"
      :fill="disabled ? disabledColor : (isFull ? color : voidColor)"
      @click="onSelect(index)"
    >
      <!-- M x,y 在这里x和y是绝对坐标，分别代表水平坐标和垂直坐标。https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/d -->
      <path :d="isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z'" />
    </svg>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'rate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 20
    },
    disabled: Boolean,
    readonly: Boolean,
    disabledColor: {
      type: String,
      default: '#f05a22'
    },
    color: {
      type: String,
      default: '#f60'
    },
    voidColor: {
      type: String,
      default: '#f05a22'
    }
  },
  computed: {
    style() {
      return {
        width: this.size + 'px'
      };
    },
    list() {
      // 第二个参数 类数组 或者数组
      return Array.apply(null, { length: this.count }).map((value, index) => index < this.value);
    }
  },
  methods: {
    onSelect(index) {
      if (!this.disabled && !this.readonly) {
        // 共最外层 v-model 调用， v-model 实际上实现了v-bind
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    }
  }
})
</script>
