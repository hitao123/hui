<template>
  <div class="demo-step">
    <h-steps :active="2">
      <h-step>卖家下单</h-step>
      <h-step>商家接单</h-step>
      <h-step>买家提货</h-step>
      <h-step>交易完成</h-step>
    </h-steps>
    <div>
      <h-steps direction="vertical" :active="1">
        <h-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </h-step>
        <h-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </h-step>
        <h-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </h-step>
        <h-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </h-step>
      </h-steps>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .demo-step {
    margin-bottom: 20px;
  }
</style>
