<template>
  <transition name="slide-bottom">
    <div v-show="value" :class="bem({ 'withtitle': title })">
      <div v-if="title" class="h-hairline--top-bottom" :class="bem('header')">
        <div v-text="title"></div>
        <icon name="close"></icon>
      </div>
      <ul v-else class="h-hairline--bottom">
        <li v-for="(item, index) in actions" :key="index" :class="[bem('item'), 'h-hairline--top']" @click="onSelect($event, item)">
          <template v-if="!item.loading">
            <span :class="bem('name')">{{ item.name }}</span>
            <span :class="bem('subname')" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <loading v-else :class="bem('loading')" size="20px" />
        </li>
      </ul>
      <div v-if="cancelText"
        v-text="cancelText"
        :class="[bem('cancel'), 'h-hairline--top']"
        @click="onCancel"
      >
      </div>
      <div v-else :class="bem('content')">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Popup from '../utils/mixins/popup';

export default create({
  name: 'actionsheet',
  mixins: [Popup],
  props: {
    value: Boolean,
    title: String,
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    cancelText: String
  },
  methods: {
    onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    },
    onSelect(event, item) {
      if (!item.disabled && !item.loading) {
        this.$emit('select', item);
      }
    }
  }
})
</script>
