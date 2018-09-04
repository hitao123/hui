<template>
  <transition name="h-fade">
    <div v-show="visible"
      :style="style"
      class="h-model"
      :class="className"
      @click="$emit('click', $event)"
      @touchmove.prevent.stop
      >
    </div>
  </transition>
</template>

<script>
export default {
  name: 'model',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>
