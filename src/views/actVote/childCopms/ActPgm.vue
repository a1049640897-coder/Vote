<template>
  <div class="act-pgm-container">
    <div class="act-pgm">
      <div class="pgm-top">
        <img src="~assets/img/common/clock.png" alt="" class="clock">
        <span class="time-title">距离投票结束还剩:</span>
        <van-count-down millisecond :time="time" format="HH:mm:ss" class="time" style="margin-right: 30px"/>
        <img src="~assets/img/common/leaderBoard.png" alt="" class="leader" @click="toAllRank">
      </div>
      <div class="pgm-bottom" v-for="(item,index) in pgm" :key="index">
        <div class="img"><img v-lazy="item.avatar" alt=""></div>
        <div class="title">
          <div class="title-1">{{item.title}}</div>
          <div class="title-2">编号:&nbsp;{{item.number}}</div>
          <div class="title-3">表演者:&nbsp;{{item.dancer}}</div>
        </div>
        <div class="circle-btn">
          <van-button round type="info" @click="showPUp(item)">
            <span v-show="btnType">投票</span>
            <span v-show="!btnType">评分</span>
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import *as mutationTypes from 'store/mutation-types';
  import {Button,CountDown} from 'vant';

  export default {
    name: "ActPgm",
    data() {
      return {
        time: 30 * 60 * 60 * 1000,
      }
    },
    components:{
      [Button.name]:Button,
      [CountDown.name]:CountDown,
    },
    methods: {
      //跳转总排行页面
      toAllRank() {
        this.$router.push('/allRank');
      },
      //展示弹窗
      showPUp(item) {
        this.$store.dispatch(mutationTypes.CHANGE_POP_SHOW, item);
      }
    },
    props: {
      pgm: {
        type: Array,
        default() {
          return []
        }
      },
      btnType: Boolean,
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .act-pgm-container {
    padding: 0px 5px 0px 5px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.5);

    .act-pgm {
      width: 100%;

      .pgm-top {
        position: relative;
        padding: 5px;
        border-bottom: 1px solid #CCCCCC;

        .clock {
          width: 29px;
          height: 28px;
        }

        .leader {
          position: absolute;
          width: 85px;
          height: 30px;
          right: 5px;
        }

        .time-title {
          font-size: 15px;
          color: #999999;
          letter-spacing: 0;
          text-align: center;
          position: relative;
          top: -6px;
          left: 5px;
        }

        .time {
          position: absolute;
          right: 95px;
          top: 6px;
          font-size: 17px;
          letter-spacing: 0;
          text-align: center;
          line-height: 33px;
        }
      }

      .pgm-bottom {
        padding: 6px;
        border-bottom: 1px solid;
        position: relative;
        border-bottom: 1px solid #CCCCCC;

        .title {
          position: absolute;
          top: 10px;
          left: 80px;

          .title-1 {
            font-size: 16px;
            color: #666666;
            font-weight: bold;
          }

          .title-2 {
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
          }

          .title-3 {
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
          }
        }


        .img img {
          width: 64px;
          height: 64px;
          border-radius: 100%;
        }

        .circle-btn {
          position: absolute;
          margin-left: 20px;
          right: 0px;
          top: 15px;
        }
      }
    }
  }
</style>