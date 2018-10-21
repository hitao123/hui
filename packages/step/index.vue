<template>
  <div :class="bem([$parent.direction, { [status]: status }])">
    <div :class="bem('title')" :style="titleStyle">
      <slot></slot>
    </div>
    <div :class="bem('circle-container')">
      <i :class="bem('circle')" v-if="status !== 'process'"></i>
      <icon v-else name="checked" :style="{ color: $parent.activeColor }" />
    </div>
    <div :class="bem('line')"></div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'step',
  computed: {
    titleStyle() {
      return this.status === 'process' ? { color: this.$parent.activeColor } : {};
    },
    status() {
      const index = this.$parent.steps.indexOf(this);
      const active = this.$parent.active;
      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  }
})
</script>
