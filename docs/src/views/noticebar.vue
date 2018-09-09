<template>
  <div>
    <div class="demo-notice">
      <h-notice-bar :text="text" mode="close"></h-notice-bar>
    </div>
    <div class="demo-notice">
      <h-notice-bar :text="text" leftIcon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"></h-notice-bar>
    </div>
    <div class="demo-notice">
      <h-notice-bar :text="text" mode="link"></h-notice-bar>
    </div>
    <div class="demo-notice">
      <h-notice-bar :text="text" mode="close" :scrollable="false"></h-notice-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '如果你还能看到谁的消息会心跳加速不自觉的微笑，答应我排除万难也要把他睡了，不负此生。'
    }
  }
}
</script>

<style lang="less">
  .demo-notice {
    margin: 20px auto;
  }
</style>
