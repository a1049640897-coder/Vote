<template>
   <div class="rwd-top-container">
      <div class="rwd-top">
        <div :class="[leftIsShow ? actived: normal]" @click="change">
          <span v-show="type">投票</span>
          <span v-show="!type">评分</span>
        </div>
        <div :class="[rightIsShow ? actived : normal]" style="margin-left: 10px" @click="changeRnk">排行榜</div>
        <div class="has-vote"> 已投:&nbsp;<span>1/6</span> </div>
      </div>
   </div>
</template>

<script>

  export default {
    name: "RwdTop",
    data (){
      return {
        leftIsShow:true,
        rightIsShow:false,
        normal:'normal',
        actived:'actived',
      }
    },
    props:{
      type:Boolean, //true是投票 false是评分
    },
    methods :{
      change(){
        this.leftIsShow = true;
        this.rightIsShow =false;
        this.$emit('changeVote');

      },
      changeRnk(){
        this.leftIsShow = false;
        this.rightIsShow =true;
        this.$emit('changeRnk');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rwd-top-container {
    padding: 15px;
    .rwd-top {
      display: flex;
      position: relative;
      .normal {
        font-size: 16px;
        color: #999999;

        line-height: 34Px;
      }
      .actived {
        font-size: 22px;
        color: #333333;
        letter-spacing: 0;
        text-align: center;

      }

     .has-vote {
       position: absolute;
       line-height: 33px;
       right: 0px;
       font-size: 0.373333rem;
       color: #999999;
       letter-spacing: 0;
       span {
         color: #52A9FF;
       }
     }
    }
  }



</style>