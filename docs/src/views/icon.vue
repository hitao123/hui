<template>
  <div class="demo-icon">
    <h-icon name="add-o" size="32px"></h-icon>
    <h-icon name="alipay" size="32px"></h-icon>
    <h-icon name="wechat" size="32px"></h-icon>
    <h-icon name="add" size="32px"></h-icon>
    <h-icon name="add2" size="32px"></h-icon>
    <h-icon name="arrow-left" size="32px"></h-icon>
    <h-icon name="close" size="32px"></h-icon>
    <h-icon name="passed" size="32px"></h-icon>
    <h-icon name="info-o" size="32px" color="#f00"></h-icon>
  </div>
</template>

<script>
import Icon from '../../../packages/icon';

export default {
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style lang="less">

</style>
