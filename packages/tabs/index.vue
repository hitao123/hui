<template>
  <div>
    <div class="h-hairline--top-bottom">
      <div :class="bem('nav')">
        <div v-if="type === 'line'" :class="bem('line')" :style="lineStyle" />
        <div ref="tabs"
          v-for="(tab, index) in tabs"
          :key="index"
          class="h-tab"
          :class="{
            'h-tab--active': index === curActive
          }"
          @click="onClick(index)"
        >
          <span class="h-ellipsis">{{ tab.title }}</span>
        </div>
      </div>
    </div>
    <div :class="bem('content')" ref="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import create from '../utils/create';
import Touch from '../utils/mixins/touch';
// import { on, off } from '../utils/event';

export default create({
  name: 'tabs',
  mixins: [Touch],
  model: {
    prop: 'active'
  },
  props: {
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    color: String
  },
  data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {}
    }
  },
  mounted() {
    this.correctActive(this.active);
    this.setLine();
  },
  watch: {
    active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs(tabs) {
      this.correctActive(this.curActive || this.active);
    },
    curActive() {
      this.setLine();
    }
  },
  methods: {
    setLine() {
      // 这里需要放在nextTick 处理，不然获取到 dom
      this.$nextTick(() => {
        if (!this.$refs.tabs || this.type !== 'line') {
          return;
        }
        const tab = this.$refs.tabs[this.curActive];
        const width = this.lineWidth || tab.offsetWidth;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        this.lineStyle = {
          width: `${width}px`,
          backgroundColor: this.color,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        };
      });
    },
    correctActive(active) {
      active = +active;
      const exist = this.tabs.some(tab => tab.index === active);
      const defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive(active) {
      if (this.isDef(active) && active !== this.curActive) {
        this.curActive = active;
      }
    },
    onClick(index) {
      this.setCurActive(index);
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
