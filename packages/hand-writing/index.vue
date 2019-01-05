<template>
  <div :class="bem()">
    <div :class="bem('container')">
      <div :class="bem('main')">
        <canvas :id="id" :class="bem('canvas')"></canvas>
      </div>
    </div>
    <div :class="bem('rewrite')" @click="handleClick(action)">
      <slot name="rewrite">
        <h-button size="large">{{ confirmText }}</h-button>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import Draw from './draw';
import Button from '../button';
export default create({
  name: 'hand-writing',
  props: {
    id: {
      type: String,
      default: 'canvas'
    },
    confirmText: {
      type: String,
      default: '重写'
    },
    action: {
      type: String,
      default: 'delete'
    }
  },
  data() {
    return {
      draw: null
    }
  },
  components: {
    [Button.name]: Button
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = document.querySelector(`#${this.id}`);
      this.draw = new Draw(canvas);
    },
    handleClick(action) {
      this.$emit(action, this.draw);
    }
  }
})
</script>
