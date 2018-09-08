<template>
  <div>
    <h-button @click="handleClick" text="click" size="large"></h-button>
  </div>
</template>

<script>

export default {
  methods: {
    handleClick () {
      this.$toast({
        message: 'hello'
      })
    }
  }
}
</script>

<style lang="less">

</style>
