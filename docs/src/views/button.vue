<template>
  <div>
    <h-button @click="handleClick" text="Button" type="default" size="large"></h-button>
  </div>
</template>

<script>

import Button from '../../../packages/button';

export default {
  components: {
    hButton: Button
  },
  methods: {
    handleClick (e) {

    }
  }
}
</script>

<style>

</style>
