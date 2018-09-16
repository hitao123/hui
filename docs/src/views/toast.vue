<template>
  <div class="demo-toast">
    <h-button @click="handleClick" text="click"></h-button>
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
  .demo-toast {
    text-align: center;
  }
</style>
