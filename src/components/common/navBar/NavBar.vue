<template>
  <div class="nav-bar">
    <div class="left" @click="back">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import * as mutationsTypes from "store/mutation-types";
  export default {
    name: "NavBar",
    methods:{
      //返回上一级
      back(){
       this.$router.back();
       //还原
        this.$store.dispatch(mutationsTypes.REDUCTION_CODE_SHOW);
      }
    }
  }
</script>

<style lang="scss"  scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    box-shadow: 0px ;
    background: white;
    .left, .right{
      width: 60px;
      line-height: 44px;
    }
    .left{
      margin-left: 10px;
      font-size: 16px;
    }
    .center{
      flex: 1;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      font-weight: bold;
    }
  }

</style>`