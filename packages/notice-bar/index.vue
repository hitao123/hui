<template>
  <div v-show="showNoticeBar"
    :class="bem('')"
    @click="$emit('click')"
  >
    <div v-if="leftIcon" :class="bem('left-icon')">
      <img :src="leftIcon" >
    </div>
    <div :class="bem('wrap')" ref="wrap">
      <div
        ref="content"
        :class="[bem('content'), animationClass]"
        :style="contentStyle"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
      >
        <slot>{{ text }}</slot>
      </div>
    </div>
    <icon
      v-if="iconName"
      :class="bem('right-icon')"
      :name="iconName"
      @click="onClickIcon"
    />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'notice-bar',
  props: {
    mode: String,
    leftIcon: String,
    text: String,
    scrollable: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 1
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  computed: {
    iconName() {
      return this.mode === 'close' ? 'close' : (this.mode === 'link' ? 'arrow' : '');
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },
  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs;
          if (!wrap || !content) {
            return;
          }

          const wrapWidth = wrap.getBoundingClientRect().width;
          const offsetWidth = content.getBoundingClientRect().width;

          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;
            this.duration = offsetWidth / this.speed;
            this.animationClass = this.bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = this.bem('play--infinite');
      });
    },
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'close';
      console.log(this.mode !== 'close', this.mode);
    }
  }
})
</script>
