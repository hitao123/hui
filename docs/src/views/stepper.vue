<template>
  <div>
    <div class="demo-stepper">
      <h-stepper v-model="value"></h-stepper>
    </div>
    <div class="demo-stepper">
      <h-stepper></h-stepper>
    </div>
    <div class="demo-stepper">
      <h-stepper :disabled="true"></h-stepper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5
    }
  }
}
</script>

<style lang="less">
  .demo-stepper {
    margin-bottom: 20px;
    text-align: center;
  }
</style>
