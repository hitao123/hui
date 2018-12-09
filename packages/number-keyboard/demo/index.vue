<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-button @touchstart.native.stop="keyboard = 'default'">默认键盘</h-button>
      <h-number-keyboard
        @input="handleInput"
        @delete="handleDelete"
        @close="handleClose"
        @blur="keyboard = ''"
        :show="keyboard === 'default'"
        close-button-text="关闭"
        extra-key="."
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      keyboard: 'default'
    }
  },
  methods: {
    handleClose() {
      this.keyboard = ''
    },
    handleDelete() {
      //
    },
    handleInput() {
      //
    }
  }
}
</script>

<style lang="less">
  .demo-number {
    text-align: center;
  }
</style>
