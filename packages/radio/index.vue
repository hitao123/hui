<template>
  <div :class="bem({ disabled: isDisabled })" @click="$emit('click')">
    <span :class="bem('input')">
      <input type="radio"
        :value="name"
        v-model="currentValue"
        :class="bem('control')"
        :disabled="isDisabled"
      />
      <icon :name="currentValue === name ? 'checked': 'check'"></icon>
    </span>
    <span v-if="$slots.default" :class="bem('label')" @click="onClickLabel">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../utils/find-parent';

export default create({
  name: 'radio',
  mixins: [findParent],
  props: {
    name: String,
    value: null,
    disabled: Boolean
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    }
  },
  created() {
    this.findParent('h-radio-group');
  },
  methods: {
    onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
</script>
