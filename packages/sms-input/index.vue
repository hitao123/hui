<template>
  <div :class="bem('')">
    <label for="sms" :class="bem('label')">
      <ul :class="bem('block')">
        <li :class="bem('item')" v-for="(item, index) in smsCount" :key="index">
          <i :class="bem('item-inner')">{{ value[index] || '' }}</i>
        </li>
      </ul>
    </label>
    <input ref="input" v-model="value" :class="bem('input-code')" id="sms" name="sms" :maxlength="maxlength" type="tel" autocomplete="off" autocorrect="off" />
  </div>
</template>

<script>
import create from '../utils/create';
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
    }
  },
  data() {
    return {
      value: ''
    }
  }
})
</script>
