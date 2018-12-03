<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-button @touchstart.native.stop="keyboard = 'default'">默认键盘</h-button>
      <h-number-keyboard
        @input="handleInput"
        @delete="handleDelete"
        @close="handleClose"
        :show="keyboard === 'default'"
        closeButtonText="关闭"
      />
    </demo-block>
    <demo-block title="高级用法">
      <h-button @touchstart.native.stop="keyboard = 'custom'">自定义键盘</h-button>
      <h-number-keyboard
        @input="handleInput"
        @delete="handleDelete"
        @close="handleClose"
        :show="keyboard === 'custom'"
        closeButtonText="关闭"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less">
  .demo-number {
    text-align: center;
  }
</style>
