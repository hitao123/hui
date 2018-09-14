<template>
  <div :class="bem([$parent.direction])">
    <div :class="bem('title')" :style="titleStyle">
      <slot></slot>
    </div>
    <div :class="bem('circle-content')">
      <i :class="bem('circle')"></i>
    </div>
    <div :class="bem('line')"></div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'step',
  props: {

  },
  computed: {
    titleStyle() {

    }
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  }
})
</script>
