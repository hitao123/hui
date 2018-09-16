<template>
  <component
    :is="tag"
    :class="bem({
      [span]: span,
      [`offset-${offset}`]: offset
    })"
    :style="style"
  >
    <slot></slot>
  </component>
</template>

<script>
import create from '../utils/create-basic';
export default create({
  name: 'col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0;
    },
    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    }
  }
})
</script>
