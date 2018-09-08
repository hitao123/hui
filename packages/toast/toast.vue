<template>
  <transition name="toast">
    <div :class="bem('')" v-show="visible">
      <icon :class="[`h-icon${iconName}`, bem('icon')]" v-if="iconName"></icon>
      <span :class="bem('text')">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
export default create({
  name: 'toast',
  props: {
    message: String,
    iconName: String
  },
  data () {
    return {
      visible: false
    }
  }
})
</script>
