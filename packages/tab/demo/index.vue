<template>
  <div class="tab-demo">
    <h-tabs v-model="active">
      <h-tab v-for="n in 4" :key="n" :title="'title' + n">
        内容{{ n }}
      </h-tab>
    </h-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="less">
  .tab-demo {
    .h-tab__pane {
      padding: 30px;
      background-color: #fff;
    }
  }
</style>
