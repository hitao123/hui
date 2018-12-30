<template>
  <cell center :title="title" :border="border" :class="bem()">
    <h-switch v-bind="$props" @input="$emit('input', $event)" />
  </cell>
</template>

<script>
import HSwitch from '../switch';
import create from '../utils/create';

export default create({
  name: 'switch-cell',
  components: {
    HSwitch
  },
  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },
  data() {
    return {
    }
  }
})
</script>
