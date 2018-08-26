<template>
  <button
    :type="nativeType"
    :class="bem([
      type,
      size,
      {
        block,
        plain,
        loading,
        disabled
      }
    ])"
    @click="onClick"
  >
    <loading v-if="loading" size="20px" />
    <span :class="bem('text')">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
import create from '../../utils/create';

export default create({
  name: 'button',
  props: {
    text: String,
    block: Boolean,
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
      this.$emit('click', event)
    }
  }
})
</script>
