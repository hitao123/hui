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
import { raf } from '../utils/raf';
import findParent from '../utils/find-parent';

export default create({
  name: 'collapse-item',
  mixins: [findParent],
  props: {
    name: [String, Number],
    icon: String,
    title: String,
    label: String,
    value: String,
    isLink: {
      type: Boolean,
      default: true
    },
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
      if (!this.parent) {
        return null;
      }
      const { value, accordion } = this.parent;
      return accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    }
  },
  created() {
    this.findParent('h-collapse');
    this.items.push(this);
    this.show = this.expanded;
  },
  watch: {
    expanded(newVal, oldVal) {
      if (newVal === null) {
        return;
      }
      if (newVal) {
        this.show = true;
      }

      this.$nextTick(() => {
        const { content, wrapper } = this.$refs;
        if (!content || !wrapper) {
          return;
        }

        const contentHeight = content.clientHeight + 'px';
        wrapper.style.height = newVal ? 0 : contentHeight;
        raf(() => {
          wrapper.style.height = newVal ? contentHeight : 0;
        });
      });
    }
  },
  methods: {
    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    },
    onClick() {
      const { parent } = this;
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      const expanded = !this.expanded;
      parent.switch(name, expanded);
    }
  }
});
</script>
