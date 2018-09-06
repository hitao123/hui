<template>
  <transition name="pop">
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
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  }
});

</script>
