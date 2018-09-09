<template>
  <div>
    <div class="field-demo">
      <h-cell-group>
        <h-field v-model="value" :label="label" :placeholder="'请输入姓名'"></h-field>
      </h-cell-group>
    </div>
    <div class="field-demo">
      <h-cell-group>
        <h-field v-model="value" :label="label" :placeholder="'请输入姓名'" :showClear="true" center>
          <h-button slot="button" size="small" type="primary">重新发送</h-button>
        </h-field>
      </h-cell-group>
    </div>
    <div class="field-demo">
      <h-cell-group>
        <h-field v-model="value" :label="label" :placeholder="'请输入姓名'" errorMessage="您填写的姓名有误"></h-field>
      </h-cell-group>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      label: '姓名'
    }
  }
}
</script>

<style lang="less">
  .field-demo {
    margin: 20px 0;
  }
</style>
