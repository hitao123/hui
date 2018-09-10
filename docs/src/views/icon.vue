<template>
  <div class="demo-icon">
    <div class="item-icon" v-for="(item, index) in iconList" :key="index">
      <h-icon :name="item.name" size="32px"></h-icon>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import iconList from '../config/config.icon.js';

export default {
  data() {
    return {
      iconList
    }
  }
}
</script>

<style lang="less">
  .demo-icon {
    text-align: center;
    .item-icon {
      display: inline-block;
      padding: 10px 20px;
      span {
        display: block;
      }
    }
    .h-icon {
      display: block;
    }
  }
</style>
