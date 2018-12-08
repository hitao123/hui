<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-radio-group v-model="radio">
        <h-radio name="1">单选一</h-radio>
        <h-radio name="2">单选二</h-radio>
      </h-radio-group>
    </demo-block>
    <demo-block title="高级用法">
      <h-radio-group v-model="radio1" :disabled="true">
        <h-radio name="1">单选一</h-radio>
        <h-radio name="2">单选二</h-radio>
      </h-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '2'
    }
  }
}
</script>

<style lang="less">
  .demo-radio {
    .h-radio {
      margin-bottom: 10px;
    }
  }
</style>
