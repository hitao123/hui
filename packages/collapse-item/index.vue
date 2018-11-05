<template>
  <div
  :class="[
    bem({ expanded }),
    { 'h-hairline--top': index }
  ]"
  >
    <cell :class="bem('title')" @click="onClick" v-bind="$props">
      <slot name="title" slot="title" />
      <slot name="icon" slot="icon" />
      <slot name="value" />
      <slot name="right-icon" slot="right-icon" />
    </cell>
    <div v-show="show" ref="wrapper" :class="bem('wrapper')" @transitionend="onTransitionEnd">
      <div ref="content" :class="bem('content')">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
// import { raf } from '../utils/raf';
import findParent from '../utils/find-parent';

export default create({
  name: 'collapse-item',
  mixins: [findParent],
  props: {
    icon: String,
    title: String,
    label: String,
    value: String,
    isLink: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    arrowDirection: String
  },
  data() {
    return {
      show: null
    }
  },
  computed: {
    items() {
      return this.parent.items;
    },
    index() {
      return this.items.indexOf(this)
    },
    currentName() {
      return this.name ? this.name : this.index;
    },
    expanded() {
      const { value } = this.parent;
      return value === this.currentName;
    }
  },
  created() {
    this.findParent('h-collapse');
    this.items.push(this);
    this.show = this.expanded;
  },
  // watch: {
  //   expanded(newVal) {
  //     //
  //   }
  // },
  methods: {
    onTransitionEnd() {
      //
    },
    onClick() {
      //
    }
  }
});
</script>
