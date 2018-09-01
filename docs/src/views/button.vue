<template>
  <div class="button-demo">
    <div>
      <h3 class="h3">type</h3>
      <h-button @click="handleClick" text="Button" type="default"></h-button>
      <h-button @click="handleClick" text="Button" type="primary"></h-button>
      <h-button @click="handleClick" text="Button" type="warning"></h-button>
      <h-button @click="handleClick" text="Button" type="danger"></h-button>
    </div>
    <div>
      <h3 class="h3">plain</h3>
      <h-button @click="handleClick" text="Button" type="default" plain></h-button>
      <h-button @click="handleClick" text="Button" type="primary" plain></h-button>
      <h-button @click="handleClick" text="Button" type="warning" plain></h-button>
      <h-button @click="handleClick" text="Button" type="danger" plain></h-button>
    </div>
    <div>
      <h3 class="h3">size</h3>
      <h-button @click="handleClick" text="Button" type="default" size="large"></h-button>
      <h-button @click="handleClick" text="Button" type="primary" plain></h-button>
      <h-button @click="handleClick" text="Button" type="warning" size="small"></h-button>
      <h-button @click="handleClick" text="Button" type="danger" size="mini"></h-button>
    </div>
    <div>
      <h3 class="h3">disabled</h3>
      <h-button @click="handleClick" text="Button" type="default" size="large" disabled></h-button>
    </div>
    <div>
      <h3 class="h3">loading</h3>
      <h-button @click="handleClick" type="default" loading></h-button>
    </div>
  </div>
</template>

<script>

import Button from '../../../packages/button';

export default {
  components: {
    hButton: Button
  },
  methods: {
    handleClick (e) {

    }
  }
}
</script>

<style lang="less">
  .button-demo {
    .h3 {
      padding: 0 30px;
      text-align: center;
    }
  }
</style>
