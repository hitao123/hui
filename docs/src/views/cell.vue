<template>
  <div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell title="单元格"></h-cell>
        <h-cell title="单元格" value="内容"></h-cell>
      </h-cell-group>
    </div>
    <div class="demo-cell">
      <h-cell-group>
        <h-cell title="单元格" value="内容" label="描述"></h-cell>
      </h-cell-group>
    </div>
  </div>
</template>

<script>
import cell from '../../../packages/cell';
import cellgroup from '../../../packages/cellgroup';

export default {
  components: {
    [cell.name]: cell,
    [cellgroup.name]: cellgroup
  }
}
</script>

<style lang="less">
  .demo-cell {
    margin-top: 20px;
  }
</style>
