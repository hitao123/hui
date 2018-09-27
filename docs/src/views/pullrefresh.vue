<template>
  <div class="demo-pull">
    <h-pull-refresh v-model="isLoading" @refresh="handleRefresh"></h-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    handleRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 500);
    }
  }
}
</script>

<style lang="less">
  .demo-pull {
    margin: 0 auto;
    .h-pull-refresh {
      &,
      &__track {
        height: calc(100vh - 50px);
      }
    }
  }
</style>
