<template>
  <demo-section>
    <demo-block title="文字提示">
      <h-button @click="handleClick" text="click">文字提示</h-button>
    </demo-block>
    <demo-block title="加载提示">
      <h-button @click="handleClick2" text="click">加载提示</h-button>
    </demo-block>
    <demo-block title="成功/失败提示">
      <h-button @click="handleClick3" text="click">成功提示</h-button>
      <h-button @click="handleClick4" text="click">失败提示</h-button>
    </demo-block>
    <demo-block title="高级用法">
      <h-button @click="handleClick5" text="click">高级用法</h-button>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  methods: {
    handleClick () {
      this.$toast({
        message: '我是提示文案，建议不超过十五字~'
      })
    },
    handleClick2() {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      });
    },
    handleClick3() {
      this.$toast.success('成功文案');
    },
    handleClick4() {
      this.$toast.fail('失败文案');
    },
    handleClick5() {
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '倒计时 3 秒'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
}
</script>

<style lang="less">
  //
</style>
