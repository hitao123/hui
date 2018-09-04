<template>
  <div v-show="isSelected">
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
