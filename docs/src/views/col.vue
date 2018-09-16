<template>
  <div class="demo-col">
    <h-row>
      <h-col span="8">span 8</h-col>
      <h-col span="8">span 8</h-col>
      <h-col span="8">span 8</h-col>
    </h-row>
    <h-row>
      <h-col span="4">span 4</h-col>
      <h-col span="10" offset="4">offset 4, span 10</h-col>
    </h-row>
    <h-row gutter="20">
      <h-col span="8">span 8</h-col>
      <h-col span="8">span 8</h-col>
      <h-col span="8">span 8</h-col>
    </h-row>
    <!-- 左对齐 -->
    <h-row type="flex">
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
    </h-row>

    <!-- 居中 -->
    <h-row type="flex" justify="center">
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
    </h-row>

    <!-- 右对齐 -->
    <h-row type="flex" justify="end">
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
    </h-row>

    <!-- 两端对齐 -->
    <h-row type="flex" justify="space-between">
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
    </h-row>

    <!-- 每个元素的两侧间隔相等 -->
    <h-row type="flex" justify="space-around">
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
      <h-col span="6">span: 6</h-col>
    </h-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .demo-col {
    padding: 0 20px;
    .h-col {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 30px;
      color: #fff;
      text-align: center;
      background-clip: content-box;
      &:nth-child(odd) {
        background-color: #39a9ed;
      }
      &:nth-child(even) {
        background-color: #66c6f2;
      }
    }
  }
</style>
