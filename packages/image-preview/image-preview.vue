<template>
  <div v-if="value" :class="bem()"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <swipe :initial-swipe="startPosition" ref="swipe">
      <swipe-item v-for="(item, index) in images" :key="index">
        <img :class="bem('img')" :src="item" />
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import create from '../utils/create';
import Popup from '../utils/mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';
export default create({
  name: 'image-preview',
  mixins: [Popup],
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onTouchStart() {

    },
    onTouchEnd() {

    }
  }
})
</script>
