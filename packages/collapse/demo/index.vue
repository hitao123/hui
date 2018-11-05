<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-collapse v-model="active1">
        <h-collapse-item title="测试一">11111</h-collapse-item>
        <h-collapse-item title="测试二">222</h-collapse-item>
        <h-collapse-item title="测试三">333</h-collapse-item>
      </h-collapse>
    </demo-block>
    <!-- <demo-block title="手风琴">
      <h-collapse v-model="active2" accordion>
        <h-collapse-item :title="$t('title1')">{{ $t('content1') }}</h-collapse-item>
        <h-collapse-item :title="$t('title2')">{{ $t('content2') }}</h-collapse-item>
        <h-collapse-item :title="$t('title3')">{{ $t('content3') }}</h-collapse-item>
      </h-collapse>
    </demo-block>

    <demo-block title="高级">
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
      active1: '',
      active2: '',
      active3: ''
    }
  }
}
</script>
