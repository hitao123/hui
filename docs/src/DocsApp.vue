<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="less">
.van-doc-intro {
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  &__youzan {
    display: block;
    width: 32px;
    height: 32px;
    margin: 25px 0 0;
  }

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
  }
  p {
    font-size: 15px;
    color: #455a64;
  }
}
</style>
