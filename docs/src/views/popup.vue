<template>
  <div class="demo-popup">
    <h-button text="popup" @click="show = true"></h-button>
    <h-popup v-model="show">
      内容popup
    </h-popup>
  </div>
</template>

<script>

export default {
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
    .h-popup {
      padding: 30px 50px;
    }
  }
</style>
