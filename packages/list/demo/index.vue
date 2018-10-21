<template>
  <div class="demo-list">
    <h-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <h-cell v-for="item in list" :key="item" :title="item + ''"></h-cell>
    </h-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? '0' + text : text);
        }
        this.loading = false;
        if (this.list.length >= 80) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<style lang="less">
  .demo-list {
    margin: 0;
    .h-cell__title {
      text-align: center;
    }
  }
</style>
