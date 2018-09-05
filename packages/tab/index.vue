<template>
  <div v-show="isSelected" :class="bem('pane')">
    <slot v-if="inited" />
    <div v-if="$slots.title" ref="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../utils/find-parent';

export default create({
  name: 'tab',
  mixins: [findParent],
  data() {
    return {
      inited: false
    }
  },
  props: {
    title: String
  },
  computed: {
    index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected() {
      return this.index === this.parent.curActive;
    }
  },
  created() {
    this.findParent('h-tabs');
  },
  mounted() {
    // 这里对父组件的数据进行处理, 这里父节点自己处理了自己的数据,j将列表的内容加入 tabs
    const { tabs } = this.parent;
    const index = this.parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);
  },
  watch: {
    'parent.curActive' () {
      this.inited = this.inited || this.isSelected;
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
