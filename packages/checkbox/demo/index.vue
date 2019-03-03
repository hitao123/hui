<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-checkbox v-model="checkbox1">原型复选框</h-checkbox>
      <h-checkbox v-model="checkbox2" shape="square">方形复选框</h-checkbox>
    </demo-block>
    <demo-block title="禁用状态">
      <h-checkbox v-model="checkbox3" disabled>复选框 a</h-checkbox>
      <h-checkbox v-model="checkbox4" disabled>复选框 b</h-checkbox>
    </demo-block>
    <demo-block title="最多可选两个">
      <h-checkbox-group v-model="result" :max="2">
        <h-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >复选框 {{ item }}</h-checkbox>
      </h-checkbox-group>
    </demo-block>
    <demo-block title="复选框组">
      <h-checkbox-group v-model="result1">
        <h-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >复选框 {{ item }}</h-checkbox>
      </h-checkbox-group>
    </demo-block>
    <demo-block title="高级用法">
      <h-checkbox-group v-model="result2">
        <h-cell-group>
          <h-cell
            v-for="item in list"
            clickable
            :key="item"
            :title="`复选框 ${item}`"
            @click="toggle(index)"
          >
            <h-checkbox :name="item" ref="checkboxes" />
          </h-cell>
        </h-cell-group>
      </h-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: true,
      checkbox4: false,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      result1: [],
      result2: ['a']
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
</script>

<style lang="less">
  .demo-checkbox {
    .h-checkbox {
      padding-left: 20px;
      margin-top: 5px;
    }
  }
</style>
