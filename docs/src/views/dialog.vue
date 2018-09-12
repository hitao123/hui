<template>
  <div class="demo-dialog">
    <h-button @click="handleClick">点击dialog</h-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$dialog({});
    }
  }
}
</script>

<style lang="less">
  .demo-dialog {
    margin-bottom: 30px;
  }
</style>
