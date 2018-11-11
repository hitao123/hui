<template>
  <div class="app">
    <h-doc
      :base="base"
      :config="config"
      active="Vue 组件"
      simulator="mobile.html"
      :simulators="simulators"
      :current-simulator="currentSimulator"
    >
      <router-view />
    </h-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    }
  },
  computed: {
    base() {
      return '';
    },
    config() {
      return docConfig;
    },
    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  }
};
</script>

<style lang="less">
.h-doc-intro {
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
