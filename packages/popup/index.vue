<template>
  <transition :name="currentTransition">
    <div v-show="value" :class="bem({ [position]: position })">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../utils/mixins/popup';

export default create({
  name: 'popup',
  mixins: [Popup],
  props: {
    transition: String,
    position: {
      type: String,
      default: ''
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
  computed: {
    currentTransition() {
      return this.transition || (this.position === '' ? 'h-fade' : `popup-slide-${this.position}`);
    }
  }
});

</script>
