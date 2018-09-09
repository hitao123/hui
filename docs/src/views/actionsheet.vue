<template>
  <div>
    <div class="actionsheet-demo">
      <h-button @click="handleClick">action title</h-button>
    </div>
    <div class="actionsheet-demo">
      <h-button @click="handleClick1">action 列表</h-button>
    </div>
    <div class="actionsheet-demo">
      <h-button @click="handleClick2">action 取消</h-button>
    </div>
    <h-actionsheet v-model="visible" title="title">
      内容
    </h-actionsheet>
    <h-actionsheet v-model="visible1" :actions="actions"></h-actionsheet>
    <h-actionsheet v-model="visible2" title="title" cancelText="取消"></h-actionsheet>
  </div>
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
      this.visible1 = true;
    },
    handleClick2() {
      this.visible2 = true;
    }
  }
}
</script>

<style lang="less">
  .actionsheet-demo {
    margin: 20px auto;
    text-align: center;
  }
</style>
