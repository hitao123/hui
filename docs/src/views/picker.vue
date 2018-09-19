<template>
  <div class="demo-picker">
    <div class="margin20">
      <h4>基础用法</h4>
      <h-picker showToolbar :columns="columns" title="title" ref="picker" @change="handleChange"></h-picker>
    </div>
    <div class="margin20">
      <h4>多级联动</h4>
      <h-picker :columns="columns1"></h-picker>
    </div>
  </div>
</template>

<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      columns: ['北京', '上海', '广州', '深圳', '杭州', '武汉'],
      columns1: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      // console.log(this.$refs['picker']);
    })
  },
  methods: {
    handleChange(picker, value, index) {
      // console.log(picker, value, index);
    }
  }
}
</script>

<style lang="less">
  body {
    background-color: #f3f3f3;
  }
  .demo-picker {
    text-align: center;
  }
</style>
