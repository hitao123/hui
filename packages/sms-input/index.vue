<template>
  <div :class="bem('')">
    <label :for="inputId" :class="bem('label')">
      <ul :class="bem('block')">
        <li :class="bem('item', { active: currentIndex === index, square})" v-for="(item, index) in smsCount" :key="index">
          <i :class="bem('item-inner')">{{ value[index] || '' }}</i>
        </li>
      </ul>
    </label>
    <input ref="input" v-model="value" :class="bem('input-code')" :id="inputId" name="sms" :maxlength="maxlength" type="tel" autocomplete="off" autocorrect="off" />
  </div>
</template>

<script>
import create from '../utils/create';
import { uniqueId } from '../utils';

export default create({
  name: 'sms-input',
  props: {
    maxlength: {
      type: Number,
      default: 4
    },
    smsCount: {
      type: Number,
      default: 4
    },
    square: Boolean
  },
  data() {
    return {
      value: '',
      inputId: uniqueId('sms-input')
    }
  },
  computed: {
    currentIndex() {
      return this.value.length;
    }
  },
  watch: {
    value(val) {
      this.value = val.replace(/[^0-9]/g, '');
    }
  }
})
</script>
