<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>
    <demo-block title="高级用法">
      <h-nav-bar title="标题" left-text="返回" left-arrow>
        <h-icon name="search" slot="right" />
      </h-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    }
  }
}
</script>

<style lang="less">
  //
</style>
