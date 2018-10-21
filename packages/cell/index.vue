<template>
  <div
    :class="[
      bem({
        center,
        required,
        clickable: isLink || clickable
      }),
      { 'h-hairline': border }
    ]"
    @click="onClick"
  >
    <slot name="icon">
      <icon v-if="icon" :class="bem('left-icon')" :name="icon" />
    </slot>
    <div v-if="title || $slots.title" :class="bem('title')">
      <slot name="title">
        <span v-text="title"></span>
        <div v-text="label" :class="bem('label')"></div>
      </slot>
    </div>
    <div
      v-if="isDef(value) || $slots.default"
      :class="bem('value', { alone: !$slots.title && !title })">
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <icon v-if="isLink" :class="bem('right-icon', arrowDirection)" name="arrow" />
    </slot>
  </div>
</template>

<script>
import create from '../utils/create-basic';
import routerLink from '../utils/mixins/routerLink';
import Icon from '../icon';
export default create({
  name: 'cell',
  components: {
    Icon
  },
  mixins: [routerLink],
  props: {
    center: Boolean,
    required: Boolean,
    icon: String,
    title: String,
    label: String,
    value: String,
    isLink: Boolean,
    clickable: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    arrowDirection: String
  },
  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
