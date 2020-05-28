<template>
  <!--最外层-->
  <div class="act-cut-dwn-container">
    <div class="act-cut-dwn">
      <div class="cun-dwn-circle">
        <van-circle v-model="currentRate" :rate="0" :speed="100" size="220px"
                    stroke-linecap="round"/>
      </div>
      <div class="cut-dwn-title">
        <span v-show="!beginShow">投票进行中</span>
        <span v-show="beginShow">距离投票开始</span>

      </div>
      <div class="cut-dwn-time">
        <van-count-down millisecond
                        :time=time
                        :auto-start="false"
                        format="ss:SSS"
                        ref="countDown">
          <template v-slot="timeData">
            <span class="block" ref="hours">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block" ref="minutes">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block" ref="seconds">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="cut-dwn-vote">
        <div class="stop-vote" @click="stop" v-show="!beginShow">停止投票</div>
        <div class="begin-vote" @click="start" v-show="beginShow">
          <span>开始投票</span>
        </div>
        <div class="pause-container" v-show="!beginShow">
          <div class="pause-vote" v-show="pauseShow" @click="pause">暂停投票</div>
          <div class="pause-vote" v-show="!pauseShow" @click="keepPause">继续投票</div>
        </div>
        <div class="reset-vote" @click="reset" v-show="!beginShow">重置票数</div>
      </div>
      <div class="cut-dwn-btn">
        <div class="edit-btn">编辑</div>
        <div class="pgm-btn" @click="toPgmMag">节目管理</div>
      </div>
      <div class="hide-cut-dwn" @click="hideCutDwn">
        <i class="iconfont iconxiala"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import * as mutationsTypes from "store/mutation-types";
  import {Toast,CountDown,Circle} from 'vant';

  export default {
    name: "ActCutDwn",
    data() {
      return {
        currentRate: 0,
        time: 5000,
        setTime: null,
        beginShow: true,
        pauseShow:true,
      };
    },
    components:{
      [CountDown.name]:CountDown,
      [Circle.name]:Circle,
    },
    methods: {
      //开始计时
      start() {
        this.$refs.countDown.start();
        // //计算时间比例
        this.setTime = setInterval(() => {
            if (this.currentRate == 100) {
              Toast('倒计时结束',{
                duration:1000,
              });
              setTimeout(()=>{
                clearInterval(this.setTime);
                this.$refs.countDown.reset();
                this.currentRate =0;
                this.beginShow =true;
              },1500);
            } else {
              var hours_time = (this.$refs.hours.innerHTML) * 60 * 60 * 1000;
              var minutes_time = (this.$refs.minutes.innerHTML) * 60 * 1000;
              var seconds_time = (this.$refs.seconds.innerHTML) * 1000;
              var totalTime = hours_time + minutes_time + seconds_time;
              var currentTime = 1 - parseFloat(totalTime / this.time);
              this.currentRate = parseFloat(currentTime * 100);
            }
          }
        );
        //隐藏开始投票
        this.beginShow = false;
      },
      //停止投票
      stop() {
        this.$refs.countDown.reset();
        clearInterval(this.setTime);
        this.currentRate = 0;
        this.beginShow = true;
      },
      //暂停投票
      pause() {
        this.$refs.countDown.pause();
        clearInterval(this.setTime);
        //显示继续投票
        this.pauseShow =false;
      },
      keepPause(){
        this.start();
      },
      //重置票数
      reset() {
        this.$refs.countDown.reset();
        clearInterval(this.setTime);
        this.currentRate = 0;
      },
      //隐藏倒计时界面
      hideCutDwn() {
        this.$store.dispatch(mutationsTypes.CHANGE_CUT_DWN_SHOW);
        this.reset();
      },
      //跳转到节目管理
      toPgmMag() {
        this.$router.push('/pgmManage');
      }
    },
    computed: {},
    beforeDestroy() {
      this.stop();
    },
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  .act-cut-dwn-container {
    @include over-bg;

    .act-cut-dwn {
      width: 315px;
      margin-left: 30px;
      position: relative;
      margin-top: 40px;
      padding: 50px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .cut-dwn-title {
        position: absolute;
        font-size: 16px;
        color: #FFFFFF;
        top: 125Px;
      }

      .cut-dwn-time {
        position: absolute;
        top: 170Px;

        .block, .colon {
          font-size: 36px;
          color: #FFFFFF;
        }

      }

      .cut-dwn-vote {
        display: flex;

        .begin-vote {
          margin-top: 30px;
          margin-left: 4%;
          width: 80px;
          height: 20px;
          background: #FFFFFF;
          box-shadow: 5px 5px 14px 0 rgba(0, 0, 0, 0.08);
          border-radius: 22px;
          padding: 10px;
          text-align: center;
          font-size: 16px;
          color: #52A9FF;
          line-height: 20px;

        }

        .pause-vote {
          @extend .begin-vote;
        }

        .stop-vote {
          @extend .begin-vote;

          background-color: red;
          color: #FFFFFF;

        }

        .reset-vote {
          @extend .begin-vote;
          margin-left: 4%;
        }
      }


      .cut-dwn-btn {
        width: 100%;
        margin-top: 50px;
        display: flex;
        padding: 0px 15px;

        .edit-btn, .pgm-btn {
          width: 50px;
          border-radius: 30px;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;
          padding: 10px 15px;
          border: 1px solid white;
          text-align: center;
          flex: 1;
          /*width: 100px;*/
          /*height: 40px;*/
          /*line-height: 40px;*/
          /*flex: 1;*/
          /*background-color: white;*/
        }

        .edit-btn {
          margin-left: -10px;
          margin-right: 10px;
        }

        .pgm-btn {
          margin-left: 10px;
          margin-right: -10px;
        }
      }

      .hide-cut-dwn {
        margin-top: 30px;

        .iconxiala {
          font-size: 25px;
          color: #FFFFFF;
        }
      }
    }
  }
</style>