<template>
  <div class="iframe">
    <h-nav-bar
      v-show="title"
      class="h-doc-nav-bar"
      :title="title"
      left-arrow
      @click-left="onBack"
    >
      <a slot="right" :href="demoLink" target="_blank">
        <h-icon name="edit" />
      </a>
    </h-nav-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name
    },
    demoLink() {
      return `https://github.com/hitao123/hui/blob/master/packages/${this.$route.meta.path}/demo/index.vue`
    }
  },
  methods: {
    onBack() {
      history.back();
    }
  }
}
</script>

<style lang="less">
body {
  font-family: "PingFang SC", Helvetica, "STHeiti STXihei", "Microsoft YaHei", Tohoma, Arial, sans-serif;
  line-height: 1;
  color: #333;
  background-color: #fafafa;
  -webkit-font-smoothing: antialiased;
}
.iframe {
  width: 360px;
}
.h-doc-nav-bar {
  .h-nav-bar__left {
    cursor: pointer;
  }
  .h-nav-bar__right {
    cursor: pointer;
  }
  .h-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }
}
</style>
