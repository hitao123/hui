<template>
  <div class="side-nav">
    <h1 class="hui-title">
      <span>Hui</span>
    </h1>
    <!-- <div class="mobile-switch-lang">
      <span :class="{ active: $vantLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $vantLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
    </div> -->
    <h2 class="hui-desc">{{ description }}</h2>
    <template v-for="item in navList" v-if="item.showInMobile">
      <mobile-nav
        v-for="(group, index) in item.groups"
        :group="group"
        base=""
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
// import { setLang } from '../utils/lang';

export default {
  data() {
    return {
      docConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    navList() {
      return this.docConfig.nav || [];
    },

    description() {
      return '轻量、可靠的移动端 Vue 组件库';
    }
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      // setLang(lang);
    }
  }
};
</script>

<style lang="less">

@import "../../../packages/less/common/var.less";

.side-nav {
  box-sizing: border-box;
  width: 100%;
  padding: 60px 15px 20px;

  .hui-title,
  .hui-desc {
    font-weight: 600;
    text-align: center;
    user-select: none;
  }

  .hui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      margin-left: 15px;
      font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      font-size: 40px;
    }
  }

  .hui-desc {
    margin: 0 0 60px;
    font-size: 14px;
    color: #455a64;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  color: @blue;
  cursor: pointer;
  border: 1px solid @blue;
  border-radius: 3px;

  span {
    display: inline-block;
    width: 32px;
    line-height: 22px;
    text-align: center;

    &.active {
      color: #fff;
      background-color: @blue;
    }
  }
}
</style>
