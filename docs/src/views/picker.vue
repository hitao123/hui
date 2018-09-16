<template>
  <div class="demo-picker">
    <h-picker showToolbar :columns="columns" title="title"></h-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ['北京', '上海', '广州', '深圳', '杭州', '武汉']
    }
  }
}
</script>

<style lang="less">
  .demo-picker {
    text-align: center;
  }
</style>
