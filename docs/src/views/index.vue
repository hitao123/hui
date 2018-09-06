<template>
  <ul class="index-list">
    <li v-for="(item, index) in list" :key="index" class="h-hairline--top-bottom">
      <div class="clearfix" @click="handleRoute(item.name)">
        <span class="left">{{ item.name }}</span>
        <icon name="arrow-left"></icon>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '../../../packages/icon';

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
        },
        {
          name: 'cell',
          path: '/cell'
        },
        {
          name: 'popup',
          path: '/popup'
        },
        {
          name: 'tab',
          path: '/tab'
        }
      ]
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
