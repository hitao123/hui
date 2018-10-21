<template>
  <div :class="bem('')">
    <div :class="bem('toolbar')" class="h-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div :class="bem('cancel')" @click="emit('cancel')">{{ cancalText || 'cancel' }}</div>
        <div :class="bem('title')" v-if="title" v-text="title"></div>
        <div :class="bem('confirm')" @click="emit('confirm')">{{ confirmText || 'confirm' }}</div>
      </slot>
    </div>
    <div v-if="loading" :class="bem('loading')">
      <loading />
    </div>
    <div :class="bem('columns')" :style="columnsStyle" @touchmove.prevent>
      <picker-column
        v-for="(item, index) in (simple ? [columns] : columns)"
        :key="index"
        :value-key="valueKey"
        :initial-options="simple ? item : item.values"
        :visibleItemCount="visibleItemCount"
        :itemHeight="itemHeight"
        @change="onChange(index)"
      >
      </picker-column>
      <div :class="bem('frame')" class="h-hairline--top-bottom" :style="frameStyle" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import pickerColumn from './PickerColumn';

export default create({
  name: 'picker',
  components: {
    pickerColumn
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
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      children: []
    };
  },
  computed: {
    frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },
    columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    simple() {
      // console.log(this.columns, [this.columns], this.columns.length && !this.columns[0].values);
      return this.columns.length && !this.columns[0].values;
    }
  },
  methods: {
    // 通过索引获取 column 实例
    getColumn(index) {
      return this.children[index];
    },
    // 设置某列的值
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },
    // 获取列当前值
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },
    // 设置某列索引
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // 获取某列当前索引
    getColumnIndex(index) {
      return (this.getColumn(index) || {}).currentIndex;
    },
    // 设置值
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },
    // 获取值
    getValues() {
      return this.children.map((child) => {
        return child.getValue();
      });
    },
    // 设置列的值
    setColumnValues(index, options) {
      let column = this.children[index];
      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // 获取列的值
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // 设置索引
    setIndexes(indexes) {
      indexes.forEach((columnIndex, optionIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      })
    },
    // 获取索引
    getIndexes() {
      return this.children.map((child) => child.currentIndex);
    },
    // 向外层发送当前列信息
    onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(columnIndex), this.getColumnIndex(columnIndex));
      } else {
        this.$emit('change', this, this.getValues(), this.getColumnValues());
      }
    },
    emit(type) {
      if (this.simple) {
        this.$emit(type, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(type, this.getValues(), this.getColumnValues());
      }
    }
  }
})
</script>
