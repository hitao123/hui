<template>
  <div class="demo-dialog">
    <h-button @click="handleClick">点击dialog</h-button>
    <h-button @click="handleClick2">点击dialog2</h-button>
    <h-dialog v-model="show"
      show-cancel-button
      :message="message"
      title="title"
      cancelButtonText="cancel"
      confirmButtonText="confirm"
    >
    </h-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '<div style="font-weight: bold;">message</div>'
    }
  },
  methods: {
    handleClick() {
      this.$dialog.alert({
        message: '弹窗'
      });
    },
    handleClick2() {
      this.show = true;
    }
  }
}
</script>

<style lang="less">
  .demo-dialog {
    margin-bottom: 30px;
    text-align: center;
  }
</style>
