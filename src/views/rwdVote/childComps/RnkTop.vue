<template>
  <div class="rank-top-container">
    <div class="rank-top">
      <img src="~assets/img/common/podium.png" alt="">
      <div class="crown">
        <img src="~assets/img/common/crown.png" alt="">
      </div>
      <div class="first-number">{{msg.firstRank ? msg.firstRank.number :'没有数据'}}票</div>
      <div class="first-avatar">
        <img v-lazy="msg.firstRank ? msg.firstRank.avatar:'没有数据'">
      </div>
      <div class="first-title">{{msg.firstRank ?msg.firstRank.title:'没有数据'}}</div>
      <div class="second-number">{{msg.secondRank ? msg.secondRank.number :'没有数据'}}票</div>
      <div class="second-avatar">
        <img  v-lazy="msg.secondRank ? msg.secondRank.avatar:'没有数据'" alt="">
      </div>
      <div class="second-title">{{msg.secondRank?msg.secondRank.title:'没有数据'}}</div>
      <div class="third-number">{{msg.thirdRank? msg.thirdRank.number :'没有数据'}}票</div>
      <div class="third-avatar">
        <img  v-lazy="msg.thirdRank ? msg.thirdRank.avatar : '没有数据'" alt="">
      </div>
      <div class="third-title">
        {{msg.thirdRank?msg.thirdRank.title:'没有数据'}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RnkTop",
    props: {
      msg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/common";

  $border-radius: 10px 10px 0px 0px;
  .rank-top-container {
    position: relative;
    border-radius: 15px 15px 0px 0px;
    box-shadow: 0px -6px 10px 0 rgba(0,0,0,0.05);

    img {
      width: 300px;
      height: 158px;
      margin-top: 112px;
      margin-left: 32px;
    }

    .crown {
      position: absolute;
      top: -99px;
      left: 95px;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .first-avatar, .first-number, .first-title {
      position: absolute;
      top: 5px;
    }

    .first-number {
      padding: 3px 8px;
      background: #52A9FF;
      border-radius: 22.5px;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0;
      top: 17px;
      left: 187px;
    }

    .first-avatar {
      @include img-style;
      left: 152px;
      top: 33px;
    }

    .first-title {
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
      left: 148px;
      top: 99px;
    }

    .second-avatar, .second-number, .second-title {
      position: absolute;
    }

    .second-title {
      @extend .first-title;
      top: 133px;
      left: 25px;
    }

    .second-avatar {
      @extend .first-avatar;
      top: 68px;
      left: 50px;
    }
    .second-number {
      @extend .first-number;
      left: 80px;
      top: 50px;
    }
    .third-title {
      @extend .first-title;
      left: 255px;
      top: 152px;
    }
    .third-avatar {
      @extend .first-avatar;
      left: 255px;
      top: 86px;
    }
    .third-number {
      @extend .first-number;
      top: 70px;
      left: 290px
    }

  }
</style>