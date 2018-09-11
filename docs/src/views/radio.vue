<template>
  <div class="demo-radio">
    <h-radio-group v-model="radio">
      <h-radio name="1">单选一</h-radio>
      <h-radio name="2">单选二</h-radio>
    </h-radio-group>
    <h-radio-group v-model="radio1" :disabled="true">
      <h-radio name="1">单选一</h-radio>
      <h-radio name="2">单选二</h-radio>
    </h-radio-group>
  </div>
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
    margin: 20px 30px;
    .h-radio {
      margin-bottom: 10px;
    }
  }
</style>
