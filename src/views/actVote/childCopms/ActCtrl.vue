<template>
  <div class="act-ctrl-container">
    <div class="act-bg">
    </div>
    <div class="act-up">
      <i class="iconfont iconunfoldx"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ActCtrl"
  }
</script>

<style lang="scss" scoped>
  .act-bg {
    position: fixed;
    width: 100%;
    height: 20px;
    bottom: 0px;
    filter: blur(15px);
    background-color: #52A9FF;
    z-index: 1;
  }
  .act-up {
    position: fixed;
    bottom: 25px;
    left: 45%;
    .iconunfoldx {
      font-size: 30px;
      color: #52A9FF;
    }
    z-index: 1;
  }

</style>