<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-button @click="handleClick">有标题dialog</h-button>
      <h-button @click="handleClick2">无标题dialog</h-button>
      <h-button @click="handleClick3">确认信息</h-button>
      <h-dialog v-model="show"
        show-cancel-button
        message="消息"
        title="标题"
        cancelButtonText="取消"
        confirmButtonText="确定"
      >
      </h-dialog>
    </demo-block>
    <demo-block title="高级用法">
      <h-button @click="handleClick4">高级用法</h-button>
      <h-dialog v-model="show2"
        show-cancel-button
        :message="message"
        title="标题"
        cancelButtonText="取消"
        confirmButtonText="确定"
      >
        <h-field label="用户名" placeholder="请输入用户名"></h-field>
        <h-field type="password" label="密码" :placeholder="'请输入密码'"></h-field>
        <h-cell title="单元格" value="内容"></h-cell>
      </h-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      message: '<div style="font-weight: bold;">消息消息消息消息</div>'
    }
  },
  methods: {
    handleClick() {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗'
      });
    },
    handleClick2() {
      this.$dialog.alert({
        message: '弹窗'
      });
    },
    handleClick3() {
      this.show = true;
    },
    handleClick4() {
      this.show2 = true;
    }
  }
}
</script>

<style lang="less">
  .demo-dialog {
    margin-bottom: 30px;
  }
</style>
