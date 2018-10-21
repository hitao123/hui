<template>
  <div class="demo-icon">
    <h-col span="8" v-for="(item, index) in iconList" :key="index">
      <h-icon :name="item.name" size="30px"></h-icon>
      <span>{{ item.name }}</span>
    </h-col>
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
    .h-icon {
      display: block;
      margin: 15px 0;
    }
    .h-col {
      height: 100px;
    }
  }
</style>
