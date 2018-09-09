<template>
  <div :class="bem()">
    <slot />
    <input
      v-bind="$attrs"
      ref="input"
      type="file"
      :class="bem('input')"
      :accept="accept"
      :disabled="disabled"
      @change="onChange"
    >
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'uploader',
  props: {
    accept: {
      type: String,
      default: 'image/*'
    },
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function
  },
  methods: {
    onChange(e) {
      let { files } = e.target;
      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);
    }
  }
})
</script>
