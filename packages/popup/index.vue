<template>
  <transition name="pop">
    <div v-show="show" :class="bem(position)"></div>
  </transition>
</template>

<script>
import create from '../utils/create';
// import popup from '../utils/mixins/popup';

export default create({
  name: 'popup',
  props: {
    show: Boolean,
    position: String
  }
});

</script>
