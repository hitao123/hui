<template>
  <div class="app">
    <h-doc
      :base="base"
      :config="config"
      active="Vue 组件"
      simulator="mobile.html"
      :simulators="simulators"
      :current-simulator="currentSimulator"
      :search-config="searchConfig"
    >
      <router-view />
    </h-doc>
  </div>
</template>

<script>
import docConfig, {searchConfig} from './doc.config';

export default {
  data() {
    this.searchConfig = searchConfig;
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

// .h-doc-header {
//   &__top-nav {
//     li {

//     }
//   }
// }

#search-form { /* stylelint-disable-line */
  width: 200px;
  margin-top: -5px;
  font-size: 14px;
  background: transparent;
  border: 0;
  box-shadow: none;
}
</style>
