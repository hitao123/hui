<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-swipe :autoplay="3000">
        <h-swipe-item>1</h-swipe-item>
        <h-swipe-item>2</h-swipe-item>
        <h-swipe-item>3</h-swipe-item>
        <h-swipe-item>4</h-swipe-item>
      </h-swipe>
    </demo-block>
    <demo-block title="用法">
      <h-swipe :autoplay="4000">
        <h-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </h-swipe-item>
      </h-swipe>
    </demo-block>
    <demo-block title="高级用法">
      <h-swipe :autoplay="2000" :show-indicators="false">
        <h-swipe-item>1</h-swipe-item>
      </h-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    }
  }
}
</script>

<style lang="less">
  .demo-swipe {
    margin-bottom: 10px;
    .h-swipe-item {
      line-height: 150px;
      text-align: center;
      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }
    img {
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      pointer-events: none;
      background-color: #fff;
    }
  }
</style>
