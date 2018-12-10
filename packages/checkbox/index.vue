<template>
  <div :class="bem()">
    <div :class="[bem('icon', [shape, { disabled: isDisabled, checked}])]" @click="toggle">
      <slot name="icon" :checked="checked">
        <icon name="success" />
      </slot>
    </div>
    <span v-if="$slots.default" :class="bem('label')" @click="toggle">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../utils/find-parent';

export default create({
  name: 'checkbox',
  mixins: [findParent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get() {
        return this.parent ? this.parent.value && this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set(val) {
        if (this.parent) {
          const parentValue = this.parent.value.slice();
          if (val) {
            if (this.parent.max && parentValue.length >= this.parent.max) {
              return;
            }
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              this.parent.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },
  created() {
    this.findParent('h-checkbox-group');
  },
  methods: {
    toggle() {
      if (!this.isDisabled) {
        this.checked = !this.checked;
      }
    }
  }
});
</script>
