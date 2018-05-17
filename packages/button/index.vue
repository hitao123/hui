<template>
  <button
    :type="nativeType"
    :class="['h-button--' + type, 'h-button--' + size, {'is-plain': plain, 'is-disabled': disabled}]"
    @click="onClick">
    <span>
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: String,
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>



