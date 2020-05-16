<template>
  <!--活动奖项container-->
  <div class="act-rwd-container">
    <!--活动奖项第一层-->
    <div class="act-rwd">
      <!--活动奖项头部-->
      <div class="rwd-top">
        <img src="~assets/img/common/clock.png" alt="" class="clock">
        <span class="time-title">距离投票结束还剩:</span>
        <van-count-down millisecond :time="time" format="HH:mm:ss:SS" class="time"/>
        <img src="~assets/img/common/leaderBoard.png" alt="" class="leader" @click="toAllRank">
      </div>
      <div class="rwd-bottom" v-for="(item,index) in rwd" :key="index">
        <img src="~assets/img/common/reward.png" alt="" class="reward">
        <span class="rwd-title">{{item.rwdTitle}}</span>
        <div class="circle-btn">
          <van-button round type="info" @click="toVote(item)">
            <span v-show="isShow">投票</span>
            <span v-show="!isShow">评分</span>
          </van-button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ActRwd",
    data() {
      return {
        time: 30 * 60 * 60 * 1000,
      }
    },
    props: {
      rwd: {
        type: Array,
        default() {
          return []
        }
      },
      isShow: Boolean,

    },
    methods: {
      //跳转到总排行
      toAllRank() {
        this.$router.push('/allRank');
      },
      /***
       * 跳转到单个奖项/评分投票页面
       * @param item:相应投票/评分的信息
       */
      toVote(item) {
        console.log(this.isShow);
        this.$router.push({
          path: '/rwdVote',
          query: {
            data: item,
            btnType: this.isShow,
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .act-rwd-container {
    padding: 0px 10px 0px 10px;
    background-color: rgb(245, 245, 245);

    .act-rwd {
      width: 100%;
      border-radius: 10px 10px 0px 0px;
      background-color: white;
      position: relative;

      .rwd-top {

        position: relative;
        padding: 5px;
        margin: 0px;
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
          color: #220000;
          letter-spacing: 0;
          text-align: center;
          line-height: 33px;
        }
      }

      .rwd-bottom {
        padding: 10px;
        border-bottom: 1px dotted #CCCCCC;
        position: relative;

        .reward {
          width: 30px;
          height: 30px;
          position: relative;

        }

        .rwd-title {
          font-size: 16px;
          color: #666666;
          position: relative;
          top: -6px;
          left: 5px;
        }

        .circle-btn {
          position: absolute;
          right: 0px;
          top: 6px;
        }
      }
    }
  }
</style>