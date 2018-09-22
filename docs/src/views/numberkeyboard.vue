<template>
  <div class="demo-number">
    <h-password-input
      :value="value"
      @focus="showKeyboard = true"
    />
    <h-number-keyboard
      @input="handleInput"
      @delete="handleDelete"
      @close="handleClose"
      :show="showKeyboard"
      closeButtonText="关闭"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      showKeyboard: false
    }
  },
  methods: {
    handleInput(key) {
      if (this.value.length === 6) return
      this.value = (this.value + key).slice(0, 6);
    },
    handleDelete() {
      this.value = this.value.slice(0, -1);
    },
    handleClose() {
      this.showKeyboard = false;
    }
  }
}
</script>

<style lang="less">
  .demo-number {
    text-align: center;
  }
</style>
