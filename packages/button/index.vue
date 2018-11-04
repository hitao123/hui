<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    :class="bem([
      type,
      size,
      {
        block,
        plain,
        loading,
        disabled,
        square
      }
    ])"
    @click="onClick"
  >
    <loading v-if="loading" size="20px" :color="type === 'default' ? 'black' : 'white'" />
    <span :class="bem('text')">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    text: String,
    block: Boolean,
    square: Boolean,
    plain: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    nativeType: String
  },
  methods: {
    onClick (event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event)
      }
    }
  }
})
</script>
