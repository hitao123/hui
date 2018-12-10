<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-switch v-model="checked" />
    </demo-block>
    <demo-block title="disabled 状态">
      <h-switch v-model="checked2" disabled />
    </demo-block>
    <demo-block title="loading 状态">
      <h-switch v-model="checked3" loading />
    </demo-block>
    <demo-block title="高级用法">
      <h-switch :value="checked4" @input="handleInput" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked2: true,
      checked3: true,
      checked4: true
    }
  },
  methods: {
    handleInput(value) {
      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关'
      }).then(() => {
        this.checked4 = value;
      })
    }
  }
}
</script>
