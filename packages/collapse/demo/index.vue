<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-collapse v-model="activeNames">
        <h-collapse-item title="测试一" name="1">手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一</h-collapse-item>
        <h-collapse-item title="测试二" name="2">测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三</h-collapse-item>
        <h-collapse-item title="测试三" name="3">基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法</h-collapse-item>
      </h-collapse>
    </demo-block>
    <demo-block title="手风琴">
      <h-collapse v-model="active2" accordion>
        <h-collapse-item title="手风琴一" name="1">手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一</h-collapse-item>
        <h-collapse-item title="手风琴二" name="2">基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法</h-collapse-item>
        <h-collapse-item title="手风琴三" name="3">测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三</h-collapse-item>
      </h-collapse>
    </demo-block>

    <demo-block title="自定义标题内容">
      <h-collapse v-model="active3">
        <h-collapse-item>
          <div slot="title">自定义标题<h-icon name="question" /></div>
          自定义标题内容自定义标题内容自定义标题内容自定义标题内容自定义标题内容
        </h-collapse-item >
        <h-collapse-item title="自定义二" value="内容" icon="shop">
          手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一
        </h-collapse-item>
      </h-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      active2: '',
      active3: []
    }
  }
}
</script>
