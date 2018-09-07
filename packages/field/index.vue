<template>
  <div>
    <cell>
      <div :class="bem('body')">
        <textarea v-if="type == 'textarea'"/>
        <input v-if="input" />
      </div>
    </cell>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'field',
  props: {
    type: String,
    default: 'input'
  },
  data() {

  }
});
</script>

<style>
  /* stylelint-disable */
</style>
