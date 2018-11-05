<template>
  <div :class="bem()">
    <slot></slot>
  </div>
</template>

<script>
import create from '../utils/create';
export default create({
  name: 'collapse',
  props: {
    // accordion: Boolean,
    value: [String, Array, Number]
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    switch(name, expand) {
      //
    }
  }
});
</script>
