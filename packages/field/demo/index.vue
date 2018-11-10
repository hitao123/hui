<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-cell-group>
        <h-field ref="field" v-model="value" placeholder="请输入用户名" clearable></h-field>
      </h-cell-group>
    </demo-block>
    <demo-block title="自定义类型">
      <h-cell-group>
        <h-field v-model="value2" label="用户名" placeholder="请输入用户名" clearable required icon="question" @click-icon="$toast('question')"></h-field>
        <h-field v-model="value3" type="password" label="密码" :placeholder="'请输入密码'" maxlength="6" autocomplete="off" clearable required></h-field>
      </h-cell-group>
    </demo-block>
    <demo-block title="错误提示">
      <h-cell-group>
        <h-field v-model="value5" :label="label" :placeholder="'请输入姓名'" errorMessage="您填写的姓名有误"></h-field>
      </h-cell-group>
    </demo-block>
    <demo-block title="禁用输入框">
      <h-cell-group>
        <h-field v-model="value6" :label="label" :placeholder="'输入框已经被禁用'" disabled left-icon="contact"></h-field>
      </h-cell-group>
    </demo-block>
    <demo-block title="高度自适应">
      <h-cell-group>
        <h-field v-model="value7" :label="label" :placeholder="'请输入姓名'" icon="question" :onIconClick="handleClick"></h-field>
        <h-field type="textarea" v-model="value8" label="textarea" :placeholder="'请输入'" autosize rows="1"></h-field>
      </h-cell-group>
    </demo-block>
    <demo-block title="插入按钮">
      <h-cell-group>
        <h-field v-model="value4" :label="label" :placeholder="'请输入姓名'" clearable center>
          <h-button slot="button" size="small" type="primary">重新发送</h-button>
        </h-field>
      </h-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      label: '姓名'
    }
  },
  methods: {
    handleClick() {
      this.$toast({
        message: 'question'
      })
    }
  }
}
</script>

<style lang="less">
  .field-demo {
    margin: 20px 0;
  }
</style>
