<template>
  <i :class="[classPrefix, `${classPrefix}-${name}`]" :style="style">
    <slot></slot>
  </i>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'icon',
  props: {
    name: String,
    color: String,
    size: String,
    classPrefix: {
      type: String,
      default: 'h-icon'
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  }
})
</script>
