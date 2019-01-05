<template>
  <cell
    :center="center"
    :title="label"
    :required="required"
    :class="bem({
      disabled: $attrs.disabled
    })"
  >
    <div :class="bem('body')">
      <input
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        type="input"
        :class="bem('control')"
        :value="value"
        :readonly="readonly"
      />
      <!-- <icon
        v-if="showClear"
        name="clear"
        :class="bem('clear')"
        @touchstart.prevent="$emit('input', '')"
        @click="handleClear"
      /> -->
      <div v-if="$slots.icon || icon" :class="bem('icon')" @click="onClickIcon">
        <slot name="icon">
          <icon :name="icon" />
        </slot>
      </div>
      <div v-if="$slots.button" :class="bem('button')">
        <slot name="button" />
      </div>
    </div>
  </cell>
</template>

<script>
import create from '../utils/create';
import createTextMaskInputElement from './createInputElement';
export default create({
  name: 'text-mask',
  props: {
    value: {
      type: [String, Number]
    },
    mask: {
      type: [Array, Function, Boolean, Object],
      required: true
    },
    label: {
      type: String
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

    required: Boolean,
    clearable: Boolean,
    onIconClick: Function
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.updateValue(event.target.value)
      };
    }
  },
  methods: {
    createTextMaskInputElement,
    setTextMaskInputElement() {
      this.textMaskInputElement = this.createTextMaskInputElement({
        inputElement: this.$refs.input,
        ...this.$options.propsData
      })
    },
    initMask() {
      this.setTextMaskInputElement()
      this.textMaskInputElement.update(this.value)
    },
    bind() {
      this.setTextMaskInputElement()
      this.updateValue(this.value)
    },
    updateValue(value) {
      this.textMaskInputElement.update(value)
      this.$emit('input', this.$refs.input.value)
    }
  },
  watch: {
    mask(newMask, oldMask) {
      // Check if the mask has changed (Vue cannot detect whether an array has changed)
      if (this.mask !== oldMask) {
        this.bind()
      }
    },
    guide() {
      this.bind()
    },
    placeholderChar() {
      this.bind()
    },
    keepCharPositions() {
      this.bind()
    },
    pipe() {
      this.bind()
    },
    showMask() {
      this.bind()
    }
  },
  mounted() {
    this.initMask()
  }
})
</script>
