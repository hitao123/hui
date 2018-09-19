<template>
  <transition name="">
    <div :class="bem('')">
      <div class="h-hairline--top" :class="bem('title')">
        <span></span>
        <span :class="bem('close')">完成</span>
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
    }
  },
  methods: {
    onPressKey(text) {
      if (text === '') {
        return;
      }
      if (text) {
        this.$emit('input', text);
      }
    }
  }
})
</script>
