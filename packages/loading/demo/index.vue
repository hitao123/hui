<template>
  <demo-section>
    <demo-block title="circle">
      <h-loading></h-loading>
      <h-loading color="white"></h-loading>
    </demo-block>
    <demo-block title="spinning">
      <h-loading type="spinner"></h-loading>
      <h-loading type="spinner" color="white"></h-loading>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
}
</script>

<style lang="less">
.demo-loading {
  .h-loading {
    display: inline-block;
  }
  .h-loading--white {
    padding: 10px;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 3px;
  }
  .h-loading--black {
    margin: 5px 0 5px 20px;
  }
}
</style>
