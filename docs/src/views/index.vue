<template>
  <ul class="index-list">
    <li v-for="(item, index) in list" :key="index" class="h-hairline--top-bottom">
      <div class="clearfix" @click="handleRoute(item.name)">
        <span class="left">{{ item.name }}</span>
        <icon name="arrow"></icon>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '../../../packages/icon';
import demoList from '../demo.config.js';
export default {
  data () {
    return {
      list: demoList
    }
  },
  components: {
    Icon
  },
  methods: {
    handleRoute(name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>

<style lang="less">
  @import "../../../packages/less/common/var.less";

  .index-list {
    padding: 0;
    li {
      padding: 5px 10px;
      margin-bottom: 10px;
    }
    a {
      display: block;
      height: 14px;
    }
    .left {
      float: left;
      color: @text-color;
      text-decoration: none;
    }
    i {
      top: 5px;
      float: right;
    }
  }
</style>
