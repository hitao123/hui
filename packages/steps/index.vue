<template>
  <div :class="bem([direction])">
    <div :class="bem('items')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'steps',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    active: Number,
    activeColor: {
      type: String,
      default: '#f60'
    }
  },
  data() {
    return {
      steps: []
    }
  }
})
</script>
