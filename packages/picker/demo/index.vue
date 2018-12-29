<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-picker showToolbar :columns="columns" title="title" ref="picker"
        @change="handleChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      >
      </h-picker>
    </demo-block>
    <demo-block title="多级联动">
      <h-picker :columns="columns1" @change="handleChange2"></h-picker>
    </demo-block>
    <demo-block title="加载状态">
      <h-picker :columns="columns2" @change="handleChange3" loading></h-picker>
    </demo-block>
  </demo-section>
</template>

<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      columns: [{
        text: '北京'
      }, {
        text: '上海',
        disabled: true
      }, {
        text: '广州'
      }, {
        text: '深圳'
      }],
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
      ],
      columns2: ['2018', '2019', '2020', '2021', '2022', '2023']
    }
  },
  methods: {
    handleChange(picker, value, index) {
      // console.log(picker, value, index);
    },
    handleChange2(picker, value, index) {
      picker.setColumnValues(1, citys[value[0]])
    },
    handleChange3() {
      //
    },
    onCancel(column, index) {
      // console.log(column, index);
    },
    onConfirm(column, index) {
      // console.log(column, index);
    }
  }
}
</script>

<style lang="css" scoped>
  .demo-picker {
    text-align: left;
  }
  .demo-block {
    padding: 0;
  }
</style>
