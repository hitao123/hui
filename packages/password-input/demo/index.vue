<template>
  <div class="demo-number">
    <h-password-input
      :value="value"
      @focus="showKeyboard = true"
    />
    <h-number-keyboard
      @input="handleInput"
      @delete="handleDelete"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '1',
      showKeyboard: true
    }
  },
  methods: {
    handleInput(key) {
      if (this.value.length === 6) return
      this.value = (this.value + key).slice(0, 6);
    },
    handleDelete() {
      this.value = this.value.slice(0, -1);
    }
  }
}
</script>

<style lang="less">
  .demo-number {
    text-align: center;
  }
</style>
