<template>
  <div :class="bem()">
    <div>
      <div :class="bem('main')">
        <canvas :id="id" :class="bem('canvas')"></canvas>
      </div>
    </div>
    <slot name="rewrite">
      <div :class="bem('rewrite')">
        <h-button size="large">{{ confirmText }}</h-button>
      </div>
    </slot>
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
    }
  },
  data() {
    return {

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
    clear() {
      //
    }
  }
})
</script>
