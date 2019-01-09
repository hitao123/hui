<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-button @click="handleImagePreview">图片预览</h-button>
    </demo-block>
    <demo-block title="高级用法">
      <h-button @click="handleImagePreview2"></h-button>
    </demo-block>
  </demo-section>
</template>

<script>
import { ImagePreview } from '../../../packages'

export default {
  methods: {
    handleImagePreview() {
      const instance = ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]);
      setTimeout(() => {
        instance.close();
      }, 100);
    },
    handleImagePreview2() {

    }
  }
}
</script>
<style lang="less">
.demo-image-preview {
  .h-button {
    margin-left: 15px;
  }
}
.h-image-preview {
  img {
    width: 100%;
    height: 300px;
    pointer-events: none;
  }
}
</style>
