<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-cell-group>
        <h-cell title="单元格" value="内容" />
        <h-cell title="单元格" value="内容" label="描述信息" />
      </h-cell-group>
    </demo-block>
    <demo-block title="只设置 value">
      <h-cell-group>
        <h-cell value="内容"></h-cell>
      </h-cell-group>
    </demo-block>
    <demo-block title="设置icon">
      <h-cell-group>
        <h-cell title="单元格" icon="location"></h-cell>
      </h-cell-group>
    </demo-block>
    <demo-block title="展示箭头">
      <h-cell-group>
        <h-cell title="单元格" is-link />
        <h-cell title="单元格" is-link value="内容" />
        <h-cell title="单元格" is-link arrow-direction="down" value="内容" />
      </h-cell-group>
    </demo-block>
    <demo-block title="高级用法">
      <h-cell-group>
        <h-cell value="内容" icon="shop" is-link>
          <template slot="title">
            <span class="h-cell-text">单元格</span>
          </template>
        </h-cell>
        <h-cell title="单元格" icon="location" is-link />
        <h-cell title="单元格">
          <h-icon slot="right-icon" name="search" class="h-cell__right-icon" />
        </h-cell>
      </h-cell-group>
    </demo-block>
  </demo-section>
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
