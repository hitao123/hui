<template>
  <div :class="bem('')">
    <button
      :class="bem('minus', { disabled: minusDisabled })"
      @click="onChange('minus')"
    />
    <input
      type="number"
      :class="bem('input')"
      :value="currentValue"
      :disabled="disabled || disableInput"
      @input="onInput"
      @blur="onBlur"
    >
    <button
      :class="bem('plus', { disabled: plusDisabled })"
      @click="onChange('plus')"
    />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'stepper',
  props: {
    value: null,
    disableInput: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    integer: Boolean,
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },
  data() {
    const value = this.isDef(this.value) ? this.value : this.defaultValue
    return {
      currentValue: value
    }
  },
  computed: {
    minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },

    plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    // 过滤不合法字符
    filter(value) {
      value = String(value).replace(/[^0-9\.-]/g, ''); /* eslint no-useless-escape:off */
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // 限制值的范围
    range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onChange(type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }
      const diff = type === 'minus' ? -this.step : this.step;
      const value = Math.round((this.currentValue + diff) * 100) / 100;
      this.currentValue = value;
      this.$emit(type);
    },
    onInput(event) {
      const { value } = event.target;
      const filterValue = this.filter(value);

      if (+value !== filterValue) {
        event.target.value = filterValue;
      }
      this.currentValue = filterValue;
    },
    onBlur() {

    }
  }
})
</script>
