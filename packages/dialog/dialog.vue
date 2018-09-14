<template>
  <transition name="h-dialog-bounce">
    <div v-show="value" :class="[bem(''), className]">
      <div v-if="title" v-text="title"></div>
      <div :class="bem('content')" v-if="message || $slots.default">
        <slot>
          <div v-if="message" v-html="message" :class="bem('message')"></div>
        </slot>
      </div>
      <div class="h-hairline--top" :class="bem('footer', { 'buttons': showCancelButton && showConfirmButton })">
        <h-button v-show="showCancelButton" size="large" :class="bem('cancel')" @click="handleAction('cancel')">
          {{ cancelButtonText || '取消' }}
        </h-button>
        <h-button v-show="showConfirmButton" size="large" :class="[bem('confirm'), { 'h-hairline--left': showCancelButton && showConfirmButton }]" @click="handleAction('confirm')">
          {{ confirmButtonText || '确认' }}
        </h-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from '../button';
import Popup from '../utils/mixins/popup';
import create from '../utils/create';

export default create({
  name: 'dialog',
  mixins: [Popup],
  props: {
    className: String,
    title: String,
    message: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确定'
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
  components: {
    [Button.name]: Button
  },
  methods: {
    handleAction(type) {
      this.$emit(type);
      this.onClose();
    },
    onClose() {
      this.$emit('input', false);
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
