<template>
  <div :class="bem()" :style="{ background }">
    <icon name="search"/>
    <field
      v-bind="$attrs"
      v-on="listeners"
      clearable
      type="search"
      :value="value"
      :border="false"
    />
    <div v-if="showAction" :class="bem('action')">
      <slot name="action">
        <div @click="onBack">取消</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Field from '../field';
import create from '../utils/create'

export default create({
  name: 'search',
  props: {
    showAction: Boolean,
    value: String,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  components: {
    Field
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onKeypress(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },
    onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
})
</script>
