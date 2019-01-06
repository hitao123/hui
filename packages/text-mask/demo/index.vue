<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-text-mask v-model="value" label="身份证号" placeholder="请输入身份证"
       :mask="[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /[\d|X|x]/]"
      >
      </h-text-mask>
      <h-text-mask v-model="value2" label="银行卡号" placeholder="请输入银行卡号"
      :mask="[/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]"
      ></h-text-mask>
      <h-text-mask v-model="value3" label="手机号" placeholder="请输入手机号"
      :mask="[/[1-9]/, /[3-8]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]"
      :guide="false"
      ></h-text-mask>
    </demo-block>
    <demo-block title="高级用法">
      <h-text-mask v-model="value4" label="银行卡" placeholder="请输入银行卡号" placeholder-char="_" :guide="true" :show-mask="true" :mask="[/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]"></h-text-mask>
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
      value4: ''
    }
  }
}
</script>

<style lang="less">
//
</style>
