<template>
  <div class="pgm-container">
    <div class="pgm-top">
      <div class="pgm-title">
        <slot name="title"></slot>
      </div>
      <div class="pgm-add">
        <slot name="icon"></slot>
      </div>
    </div>
    <slot name="copms"></slot>
    <slot name="container"></slot>
  </div>
</template>

<script>
  export default {
    name: "PgmTitle"
  }
</script>

<style lang="scss" scoped>
  .pgm-container {
    padding: 15px;
    /*background-color: rgb(245, 245, 245);*/
    .pgm-top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .pgm-title {
        font-size: 22px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
        font-weight: bold;
      }

      .pgm-add {
        line-height: 40Px;

        .iconadd_listx {
          font-size: 16px;
        }
      }
    }
  }

</style>