<template>
  <demo-section>
    <demo-block title="基础用法">
      <h-cell-group>
        <h-switch-cell v-model="checked" title="标题" />
      </h-cell-group>
    </demo-block>
    <demo-block title="禁用状态">
      <h-cell-group>
        <h-switch-cell v-model="checked" title="标题" disabled />
      </h-cell-group>
    </demo-block>
    <demo-block title="加载状态">
      <h-cell-group>
        <h-switch-cell v-model="checked" title="标题" loading />
      </h-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    }
  }
}
</script>
