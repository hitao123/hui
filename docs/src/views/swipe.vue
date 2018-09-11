<template>
  <div class="demo-swipe">
    <h-swipe>
      <h-swipe-item>1</h-swipe-item>
      <h-swipe-item>2</h-swipe-item>
      <h-swipe-item>3</h-swipe-item>
    </h-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .demo-swipe {
    .h-swipe-item {
      line-height: 150px;
      text-align: center;
      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }
  }
</style>
