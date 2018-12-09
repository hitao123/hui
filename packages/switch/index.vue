<template>
  <div
    :class="bem({
      on: value,
      disabled
    })"
    :style="style"
    @click="onClick"
  >
    <div :class="bem('node')">
      <loading v-if="loading" :class="bem('loading')" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'switch',
  props: {
    value: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },
  computed: {
    style() {
      return {
        fontSize: this.size
      }
    }
  },
  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
})
</script>
