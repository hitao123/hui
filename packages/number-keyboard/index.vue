<template>
  <transition :name="transition ? 'h-slide-bottom' : ''">
    <div
      :class="bem('')"
      v-show="show"
    >
      <div class="h-hairline--top" :class="bem('title')">
        <span></span>
        <span
          v-if="showTitleClose"
          :class="bem('close')"
          v-text="closeButtonText"
          @click="onClose"
        />
      </div>
      <div :class="bem('body')">
        <key
          v-for="(key, index) in keys"
          :key="index"
          :text="key.text"
          :type="key.type"
          @press="onPressKey"

        >
        </key>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Key from './Key';

export default create({
  name: 'number-keyboard',
  components: {
    Key
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    transition: {
      type: Boolean,
      default: true
    },
    extraKey: {
      type: String,
      default: '.'
    }
  },
  computed: {
    keys() {
      const keys = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }
      keys.push(
        { text: this.extraKey, type: ['gray'] },
        { text: 0 },
        { text: 'delete', type: ['gray', 'delete'] }
      );
      return keys;
    },
    showTitleClose() {
      return this.title || this.closeButtonText
    }
  },
  watch: {
    show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  methods: {
    onPressKey(text) {
      if (text === '') {
        return;
      }
      if (text === 'delete') {
        this.$emit('delete');
      } else {
        this.$emit('input', text);
      }
    },
    onClose() {
      this.$emit('close');
    }
  }
})
</script>
