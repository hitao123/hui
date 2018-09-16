<template>
  <div :class="bem('')">
    <div :class="bem('toolbar')" class="h-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div :class="bem('cancel')" @click="$emit('cancel')">{{ cancalText || 'cancel' }}</div>
        <div :class="bem('title')" v-if="title" v-text="title"></div>
        <div :class="bem('confirm')" @click="$emit('confirm')">{{ confirmText || 'confirm' }}</div>
      </slot>
    </div>
    <div v-if="loading" :class="bem('loading')">
      <loading />
    </div>
    <div :class="bem('coloums')" :style="columnsStyle" @touchmove.prevent>
      <picker-coloumn
        v-for="(item, index) in (simple ? [columns] : columns)"
        :key="index"
        :initial-options="simple ? item : item.values"
        :visibleItemCount="visibleItemCount"
        :itemHeight="itemHeight"
      >
      </picker-coloumn>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import pickerColoumn from './PickerColoumn';

export default create({
  name: 'picker',
  components: {
    pickerColoumn
  },
  props: {
    showToolbar: Boolean,
    cancalText: String,
    confirmText: String,
    title: String,
    loading: Boolean,
    itemHeight: {
      type: Number,
      default: 44
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    simple() {
      return this.columns.length && !this.columns[0].values;
    }
  }
})
</script>
