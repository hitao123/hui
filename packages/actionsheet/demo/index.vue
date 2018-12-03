<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-button @click="handleClick">action title</h-button>
    </demo-block>
    <demo-block title="待取消的 ActionSheet">
      <h-button @click="handleClick1">action 列表</h-button>
    </demo-block>
    <demo-block title="带title的 ActionSheet">
      <h-button @click="handleClick2">action 取消</h-button>
    </demo-block>
    <h-actionsheet v-model="visible" title="title">
      <p>内容</p>
    </h-actionsheet>
    <h-actionsheet v-model="visible1" :actions="actions"></h-actionsheet>
    <h-actionsheet v-model="visible2" title="title" cancelText="取消">

    </h-actionsheet>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: '打开相机'
        },
        {
          name: '选择照片',
          subname: 'tips'
        },
        {
          loading: true
        }
      ],
      visible: false,
      visible1: false,
      visible2: false
    }
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    handleClick1() {
      this.visible2 = true;
    },
    handleClick2() {
      this.visible1 = true;
    }
  }
}
</script>

<style lang="less">
  .demo-actionsheet {
    p {
      padding: 20px;
    }
  }
</style>
