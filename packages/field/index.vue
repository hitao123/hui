<template>
  <cell
    :center="center"
    :title="label"
    :class="bem({
      disabled: $attrs.disabled,
      'min-height': type === 'textarea' && !autosize
    })"
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
    },
    autosize: Boolean
  },
  data() {
    return {

    }
  },
  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted() {
    this.$nextTick(this.adjustSize);
  },
  methods: {
    onClickIcon() {

    },
    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      // if (isObj(this.autosize)) {
      //   const { maxHeight, minHeight } = this.autosize;
      //   if (maxHeight) {
      //     height = Math.min(height, maxHeight);
      //   }
      //   if (minHeight) {
      //     height = Math.max(height, minHeight);
      //   }
      // }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
});
</script>

<style>
  /* stylelint-disable */
</style>
