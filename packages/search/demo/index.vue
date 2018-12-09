<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-search placeholder="请输入搜索关键字" v-model="value" />
    </demo-block>
    <demo-block title="默认显示">
      <form action="/">
        <h-search
          v-model="value2"
          placeholder="请输入搜索关键字"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>
    <demo-block title="自定义用法">
      <h-search show-action placeholder="请输入搜索关键字" v-model="value3">
        <div slot="action">
          <div @click="onSearch2">搜索</div>
        </div>
      </h-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
      value3: ''
    }
  },
  methods: {
    onSearch() {
      this.$toast(this.value2);
    },
    onSearch2() {
      this.$toast(this.value3);
    },
    onCancel() {
      this.$toast('取消');
    }
  }
}
</script>

<style lang="less">
  .demo-search {
    margin: 20px 30px;
    .h-search__action div {
      padding: 0 10px;
    }
  }
</style>
