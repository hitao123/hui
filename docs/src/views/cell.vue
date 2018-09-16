<template>
  <div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell title="单元格"></h-cell>
        <h-cell title="单元格" value="内容"></h-cell>
      </h-cell-group>
    </div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell title="单元格" value="内容" label="描述"></h-cell>
      </h-cell-group>
    </div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell value="内容" label="描述"></h-cell>
      </h-cell-group>
    </div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell icon="wechat" value="内容" label="描述"></h-cell>
      </h-cell-group>
    </div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell title="单元格" value="内容" isLink></h-cell>
        <h-cell title="单元格" value="内容" isLink arrow-direction="down" @click="handleClick"></h-cell>
      </h-cell-group>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    handleClick() {
      this.$dialog.alert({
        message: 'hello'
      })
    }
  }
}
</script>

<style lang="less">
  .demo-cell {
    margin-top: 20px;
  }
</style>
