<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-button text="popup" @click="show = true"></h-button>
      <h-popup v-model="show">
        popup
      </h-popup>
    </demo-block>
    <demo-block title="弹出位置">
      <h-button text="底部弹出" @click="show1 = true"></h-button>
      <h-button text="顶部弹出" @click="show2 = true"></h-button>
      <h-button text="右侧弹出" @click="show3 = true"></h-button>
      <h-popup v-model="show1" position="bottom">
        <h-picker
          show-toolbar
          :columns="columns"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </h-popup>
      <h-popup v-model="show2" position="top">
        top
      </h-popup>
      <h-popup v-model="show3" position="right">
        <h-button text="右侧关闭" @click="show3 = false"></h-button>
      </h-popup>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  }
}
</script>
<style lang="less">
  .demo-popup {
    .demo-block__title {
      padding-left: 0;
    }
    .h-popup {
      box-sizing: border-box;
      padding: 20px;
    }
    .h-popup--top {
      width: 100%;
      line-height: 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
      border-radius: 0;
    }
    .h-popup--right {
      width: 100%;
      height: 100%;
    }
  }
</style>
