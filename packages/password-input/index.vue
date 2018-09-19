<template>
  <div :class="bem()">
    <ul class="h-hairline--surround" :class="bem('security')">
      <li v-for="(visible, index) in points" :key="index" class="h-hairline">
        <i :style="`visibility: ${visible}`"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'password-input',
  props: {
    length: {
      type: Number,
      default: 6
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    points() {
      const arr = [];
      for (let i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
})
</script>
