<template>
  <div>
    <div class="demo-loading">
      <h3>circle</h3>
      <h-loading color="black"></h-loading>
      <h-loading color="white"></h-loading>
    </div>
    <div class="demo-loading">
      <h3>spinning</h3>
      <h-loading type="spinner" color="black"></h-loading>
      <h-loading type="spinner" color="white"></h-loading>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less">
.demo-loading {
  text-align: center;
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
