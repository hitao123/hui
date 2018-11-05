<template>
  <h-collapse class="mobile-nav" v-model="active">
    <h-collapse-item :title="group.groupName" :name="group.groupName" class="mobile-nav__item">
      <h-cell
        v-if="!navItem.disabled"
        v-for="(navItem, index) in group.list"
        :key="index"
        :to="base + navItem.path"
        :title="navItem.title"
        is-link
      />
    </h-collapse-item>
  </h-collapse>
</template>

<script>
export default {
  name: 'mobile-nav',
  props: {
    group: Object,
    base: String
  },
  data() {
    return {
      active: []
    }
  }
}
</script>

<style lang="less">
  .mobile-nav {
    &__item {
      margin-bottom: 20px;
    }

    &::after {
      display: none;
    }

    .h-collapse-item__content {
      padding: 0;
    }

    .h-collapse-item__title {
      align-items: center;
      font-size: 16px;
      line-height: 36px;
    }
  }
</style>
