<template>
  <demo-section>
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <h-button type="default">默认按钮</h-button>
        <h-button type="primary">主要按钮</h-button>
      </div>
      <h-button type="warning">警告按钮</h-button>
      <h-button type="danger">危险按钮</h-button>
    </demo-block>
    <demo-block title="简单按钮">
      <div class="demo-button-row">
        <h-button type="default" plain>默认按钮</h-button>
        <h-button type="primary" plain>主要按钮</h-button>
      </div>
      <h-button type="warning" plain>警告按钮</h-button>
      <h-button type="danger" plain>危险按钮</h-button>
    </demo-block>
    <demo-block title="按钮大小">
      <div class="demo-button-row">
        <h-button size="large" type="primary">大号按钮</h-button>
      </div>
      <h-button size="normal" type="primary">普通按钮</h-button>
      <h-button size="small" type="primary">小型按钮</h-button>
      <h-button size="mini" type="primary">迷你按钮</h-button>
    </demo-block>
    <demo-block title="禁用状态">
      <h-button @click="handleClick" type="primary" disabled>禁用状态</h-button>
      <h-button @click="handleClick" type="danger" disabled>禁用状态</h-button>
    </demo-block>
    <demo-block title="加载状态">
      <h-button @click="handleClick" type="primary" loading>loading</h-button>
      <h-button @click="handleClick" type="danger" loading>loading</h-button>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  methods: {
    handleClick (e) {

    }
  }
}
</script>

<style lang="less">
  .demo-button {
    &-row {
      margin-bottom: 10px;
    }
    .h-button--normal:not(:last-child) {
      margin-right: 16px;
    }
    .h-button--small {
      margin-right: 16px;
    }
  }
</style>
