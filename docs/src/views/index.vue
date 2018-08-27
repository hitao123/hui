<template>
  <ul class="index-list">
    <li v-for="(item, index) in list" :key="index">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: 'button',
          path: '/button'
        },
        {
          name: 'toast',
          path: '/toast'
        },
        {
          name: 'loading',
          path: '/loading'
        },
        {
          name: 'icon',
          path: '/icon'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import "../../../packages/less/common/var.less";

  .index-list {
    padding: 0 30px;
    li {
      padding: 5px 10px;
      margin-bottom: 10px;
      border: 1px solid @gray-dark;
    }
    a {
      display: block;
      color: @green;
      text-decoration: none;
    }
  }
</style>
