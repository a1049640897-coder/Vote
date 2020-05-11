<template>
  <div class="crt-top-container">
    <div class="crt-top">
      <div class="cnt">
        <div :class="[$store.state.actCntIsShow ? actived : normal]" @click="changeActCnt">
          活动内容
        </div>
      </div>
      <div class="set">
        <div :class="[$store.state.actSetIsShow ? actived : normal]" @click="changeActSet">
          活动设置
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import * as mutationTypes from "store/mutation-types";
  export default {
    name: "CrtTop",
    data() {
      return {
        actived: 'actived',
        normal: 'normal',
      }
    },
    methods:{
      changeActCnt(){
        this.$store.dispatch(mutationTypes.CHANGE_ACT_CNT_SHOW,true);
        this.$store.dispatch(mutationTypes.CHANGE_ACT_SET_SHOW,false);
      },
      changeActSet(){
        this.$store.dispatch(mutationTypes.CHANGE_ACT_CNT_SHOW,false);
        this.$store.dispatch(mutationTypes.CHANGE_ACT_SET_SHOW,true);
      }
    }

  }
</script>

<style lang="scss" scoped>
  .crt-top-container {
    padding: 15px;
    background-color: #CCCCCC;

    .crt-top {

      display: flex;
      .set{
       margin-left: 10px;
      }

      .actived {
        font-size: 22px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;
      }

      .normal {
        font-size: 16px;
        color: #999999;
        letter-spacing: 0;
        text-align: center;
        line-height: 35Px;

      }
    }
  }
</style>