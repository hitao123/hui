<template>
  <div :class="bem('')">
    <slot></slot>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'checkbox-group',
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
});
</script>
