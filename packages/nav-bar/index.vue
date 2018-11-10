<template>
  <div :class="bem({ fixed })" class="h-hairline--bottom" :style="style">
    <div :class="bem('left')" @click="$emit('click-left')">
      <slot name="left">
        <h-icon v-if="leftArrow" name="arrow"  :class="bem('arrow')" ></h-icon>
        <div v-if="leftText" :class="bem('text')">{{ leftText }}</div>
      </slot>
    </div>
    <div v-if="title" :class="bem('title')">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="bem('right')" @click="$emit('click-right')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText" :class="bem('text')" />
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
export default create({
  name: 'nav-bar',
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    }
  }
})
</script>
