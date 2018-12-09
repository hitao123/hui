<template>
  <cell
    :center="center"
    :title="label"
    :required="required"
    :class="bem({
      disabled: $attrs.disabled,
      'min-height': type === 'textarea' && !autosize
    })"
  >
    <div :class="bem('body')">
      <textarea v-if="type === 'textarea'"
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :class="bem('control')"
        :value="value"
        :readonly="readonly"
      />
      <input v-else
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :type="type"
        :class="bem('control')"
        :value="value"
        :readonly="readonly"
      />
      <icon
        v-if="showClear"
        name="clear"
        :class="bem('clear')"
        @touchstart.prevent="$emit('input', '')"
        @click="handleClear"
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
import { isObj } from '../utils';

export default create({
  name: 'field',
  props: {
    value: {
      type: [String, Number]
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
    errorMessage: {
      type: String
    },
    autosize: [Boolean, Object],
    required: Boolean,
    clearable: Boolean,
    onIconClick: Function
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value) && !this.readonly;
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        focus: this.onFocus,
        blur: this.onBlur
      };
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
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus() {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur() {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },
    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    handleClear() {
      if (this.readonly) return;
      this.$emit('input', '');
    }
  }
});
</script>
