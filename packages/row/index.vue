<template>
  <component
    :is="tag"
    :class="bem({
      flex,
      [`justify-${justify}`]: flex && justify,
      [`align-${align}`]: flex && align
    })"
    :style="style"
  >
    <slot></slot>
  </component>
</template>

<script>
import create from '../utils/create-basic';
export default create({
  name: 'row',
  props: {
    type: String,
    tag: {
      type: String,
      default: 'div'
    },
    justify: String,
    align: String,
    gutter: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    flex() {
      return this.type === 'flex'
    },
    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
})
</script>
