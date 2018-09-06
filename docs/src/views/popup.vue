<template>
  <div class="demo-popup">
    <h-button text="popup" @click="show = true"></h-button>
    <h-popup v-model="show">
      内容popup
    </h-popup>
  </div>
</template>

<script>
import Button from '../../../packages/button';
import Popup from '../../../packages/popup';

export default {
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onClick() {

    }
  }
}
</script>
<style lang="less">
  .demo-popup {
    text-align: center;
  }
</style>
