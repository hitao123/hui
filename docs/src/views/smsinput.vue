<template>
  <div class="demo-sms">
    <div class="margin20">
      <h-sms-input></h-sms-input>
    </div>
    <div class="margin20">
      <h-sms-input :square="true"></h-sms-input>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .demo-sms {
    margin: 0 auto;
  }
  .margin20 {
    margin-bottom: 20px;
  }
</style>
