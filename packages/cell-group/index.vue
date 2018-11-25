<template>
  <div :class="[bem(''), { 'h-hairline--top-bottom': border }]">
    <slot></slot>
  </div>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
})
</script>
