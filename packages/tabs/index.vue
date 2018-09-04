<template>
  <div>
    <div :class="bem('nav')" >
      <div v-for="(tab, index) in tabs" :key="index">
        <span>{{ tab.title }}</span>
      </div>
    </div>
    <div :class="bem('content')">
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
    }
  },
  data() {
    return {
      tabs: [],
      position: '',
      curActive: null
    }
  },
  mounted() {
    this.correctActive(this.active);
  },
  watch: {
    active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    tabs(tabs) {
      this.correctActive(this.curActive || this.active);
    }
  },
  methods: {
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
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
