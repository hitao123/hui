<template>
  <div>
    <div class="demo-uploader">
      <h-uploader>
        <div class="uploader-one h-hairline--surround">
          <h-icon name="add"></h-icon>
        </div>
      </h-uploader>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .demo-uploader {
    margin: 20px;
    text-align: center;
    .uploader-one {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
    }
    .h-icon {
      font-size: 50px;
    }
  }
</style>
