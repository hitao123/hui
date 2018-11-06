<template>
  <div :class="bem('')" class="h-hairline--bottom">
    <div :class="bem('left')">
      <h-icon name="arrow" v-if="leftArrow" :class="bem('arrow')" @click="$emit('click-left')"></h-icon>
      <div v-if="leftText" :class="bem('text')">{{ leftText }}</div>
    </div>
    <div v-if="title" :class="bem('title')">{{ title }}</div>
    <div :class="bem('right')">
      <div v-if="rightText" :class="bem('text')">{{ rightText }}</div>
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
  }
})
</script>
