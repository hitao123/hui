<template>
  <div class="rate-demo">
    <h-rate :count="5" v-model="value1" @change="handleChange"></h-rate>
    <h-rate :count="3" v-model="value2" color="#2ba"></h-rate>
    <h-rate :count="3" :disabled="true"></h-rate>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 2,
      value2: 1
    }
  },
  methods: {
    handleChange(index) {
      console.log(index);
    }
  }
}
</script>

<style lang="less">
  .rate-demo {
    margin: 20px 30px;
  }
</style>
