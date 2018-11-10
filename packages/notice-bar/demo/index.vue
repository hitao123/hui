<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-notice-bar :text="text" left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"></h-notice-bar>
    </demo-block>
    <demo-block title="禁用滚动">
      <h-notice-bar :text="text" :scrollable="false"></h-notice-bar>
    </demo-block>
    <demo-block>
      <h-notice-bar :text="text" mode="close" left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"></h-notice-bar>
    </demo-block>
    <demo-block title="通告栏模式">
      <h-notice-bar :text="text" mode="link"></h-notice-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    }
  }
}
</script>

<style lang="less">
  .demo-notice {
    margin: 20px auto;
  }
</style>
