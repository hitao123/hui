<template>
  <cell
    :center="center"
    :title="label"
    :class="bem('')"
  >
    <div :class="bem('body')">
      <textarea v-if="type === 'textarea'"
        v-bind="$attrs"
        ref="input"
        :class="bem('control')"
        :value="value"
        :readonly="readonly"
      />
      <input v-else
        v-bind="$attrs"
        ref="input"
        :class="bem('control')"
        :value="value"
        :readonly="readonly"
      />
      <icon
        v-if="showClear"
        name="clear"
        :class="bem('clear')"
        @touchstart.prevent="$emit('input', '')"
      />
      <div v-if="$slots.icon || icon" :class="bem('icon')" @click="onClickIcon">
        <slot name="icon">
          <icon :name="icon" />
        </slot>
      </div>
      <div v-if="$slots.button" :class="bem('button')">
        <slot name="button" />
      </div>
    </div>
    <div
      v-if="errorMessage"
      v-text="errorMessage"
      class="h-hairline--bottom"
      :class="bem('error-message')"
    />
  </cell>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'field',
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'input'
    },
    center: {
      type: Boolean
    },
    readonly: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    showClear: {
      type: Boolean
    },
    errorMessage: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onClickIcon() {

    }
  }
});
</script>

<style>
  /* stylelint-disable */
</style>
