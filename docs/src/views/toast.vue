<template>
  <div>
    <h-button @click="handleClick" text="click" size="large"></h-button>
  </div>
</template>

<script>
import Toast from '../../../packages/toast/toast';
import Button from '../../../packages/button';

export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    handleClick () {
      Toast({
        message: 'hello'
      })
    }
  }
}
</script>

<style lang="less">

</style>
