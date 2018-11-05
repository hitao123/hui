<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-collapse v-model="active1">
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

    <!-- <demo-block title="高级">
      <h-collapse v-model="active3">
        <h-collapse-item>
          <div slot="title">{{ $t('title1') }}<h-icon name="question" /></div>
          {{ $t('content1') }}
        </h-collapse-item>
        <h-collapse-item :title="$t('title2')" :value="$t('content')" icon="shop">
          {{ $t('content2') }}
        </h-collapse-item>
      </h-collapse>
    </demo-block> -->
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active1: ['1'],
      active2: '',
      active3: ''
    }
  }
}
</script>
