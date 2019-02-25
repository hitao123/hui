<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-hand-writing @delete="handleClick" :config="config"></h-hand-writing>
    </demo-block>
    <!-- <demo-block title="高级用法">
      <h-hand-writing id="canvas2"
        @download="handleDownLoad"
        @draw="handleDraw"
        @blob="handleBlob"
        :action="action"
        :config="config"
      >
        <div slot="rewrite" class="demo-rewrite">
          <h-button size="large" @click="action = 'download'">下载</h-button>
          <h-button size="large" @click="action = 'draw'">画图</h-button>
          <h-button size="large" @click="action = 'blob'">获取 Blob对象</h-button>
        </div>
      </h-hand-writing>
    </demo-block> -->
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      action: 'delete',
      url: 'https://img.xiami.net/images/appv5/common/21873/58d54521900f9_ZaG9_1490371873.jpg',
      config: {
        height: 100,
        lineWidth: 2,
        strokeStyle: 'red'
      }
    }
  },
  methods: {
    handleClick(draw) {
      draw.clear();
    },
    handleTransform(draw) {
      draw.rotate(90);
    },
    handleDownLoad(draw) {
      draw.downloadPNGImage(draw.getPNGImage())
    },
    handleDraw(draw) {
      draw.drawImage(this.url);
    },
    handleBlob(draw) {
      const blob = draw.dataURLtoBlob(draw.getPNGImage());
      console.log(blob);
    }
  }
}
</script>

<style lang="less">
//
</style>
