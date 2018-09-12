<template>
  <transition name="dialog">
    <div v-show="value" :class="[bem(''), className]">
      <div v-if="title" v-text="title"></div>
      <div :class="bem('content')" v-if="message || $slots.default">
        <slot>
          <div v-if="message" v-html="message" :class="bem('message')"></div>
        </slot>
      </div>
      <div class="h-hairline--top" :class="bem('footer')">
        <h-button v-show="showCancelButton" size="large" :class="bem('cancel')" @click="handleAction('cancel')">
          {{ cancelButtonText }}
        </h-button>
        <h-button v-show="showConfirmButton" size="large" :class="bem('confirm')" @click="handleAction('confirm')">
          {{ confirmButtonText }}
        </h-button>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'dialog',
  props: {
    value: Boolean,
    className: String,
    title: String,
    message: String,
    showCancelButton: Boolean,
    showConfirmButton: Boolean,
    cancelButtonText: String,
    confirmButtonText: String
  },
  methods: {
    handleAction(type) {
      this.$emit(type);
    }
  }
})
</script>

<style>
  /* stylelint-disable */
</style>
