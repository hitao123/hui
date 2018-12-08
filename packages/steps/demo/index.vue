<template>
  <demo-section>
    <demo-block title="基本用法">
      <h-steps :active="active">
        <h-step>第一步</h-step>
        <h-step>第二步</h-step>
        <h-step>完成</h-step>
      </h-steps>
    </demo-block>
    <demo-block title="高级用法">
      <h-steps :active="active2" icon="logistics" title="标题" description="描述信息">
        <h-step>第一步</h-step>
        <h-step>第二步</h-step>
        <h-step>完成</h-step>
      </h-steps>
    </demo-block>
    <demo-block title="垂直用法">
      <h-steps direction="vertical" :active="0" active-color="#f60">
        <h-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </h-step>
        <h-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </h-step>
        <h-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </h-step>
      </h-steps>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      active2: 2
    }
  }
}
</script>

<style>

</style>
