<template>
  <div class="detail-content-container">
    <div class="detail-content">
      <div class="title">{{title.activityTitle}}</div>
      <div class="detail-item" v-for="(item,index) in list" :key="index">
        <div class="item-top">
          <div class="icon" v-show="index ===0"><i :class="item.DIntroduction.icon"></i></div>
          <div class="icon" v-show="index ===1"><i :class="item.DTime.icon"></i></div>
          <div class="icon" v-show="index ===2"><i :class="item.DAddress.icon"></i></div>
          <div class="icon" v-show="index ===3"><i :class="item.DRules.icon"></i></div>
          <div class="icon" v-show="index ===4"><i :class="item.DReward.icon"></i></div>
          <div class="text" v-show="index ===0">{{item.DIntroduction.title}}</div>
          <div class="text" v-show="index ===1">{{item.DTime.title}}</div>
          <div class="text" v-show="index ===2">{{item.DAddress.title}}</div>
          <div class="text" v-show="index ===3">{{item.DRules.title}}</div>
          <div class="text" v-show="index ===4">{{item.DReward.title}}</div>
        </div>
        <div class="item-bottom">
          <div class="bottom-text" v-show="index ===0">{{item.DIntroduction.cont}}</div>
          <div class="bottom-text" v-show="index ===1">{{item.DTime.time}}</div>
          <div class="bottom-text" v-show="index ===2">{{item.DAddress.address}}</div>
          <div class="bottom-text" v-show="index ===3">{{item.DRules.rule}}</div>
          <div class="bottom-text" v-show="index ===4">
            <div class="text-item" v-for="(item,index) in item.DReward.rewards" :key="index">
              {{item.title}}&nbsp;:&nbsp;{{item.cont}}
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCont",
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type: Object,
        default() {
          return {}
        }
      }

    }

  }
</script>

<style lang="scss" scoped>
  .detail-content-container {
    width: 100%;
    margin-top: -30px;
    position: relative;
    .detail-content {
      width: 100%;
      background-color: white;
      border-radius: 20px 20px 0px 0px;

      .title {
        padding: 20px 0px 20px 15px;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
      }

      .detail-item {
        .item-top {
          display: flex;
          padding-left: 15px;

          .icon {
            font-size: 16px;
            color: #52A9FF;
            margin-right: 5px;
          }

          .text {
            font-size: 16px;
            color: #666666;
            letter-spacing: 0;
            text-align: center;
            margin-left: 5px;
          }
        }

        .item-bottom {
          margin-bottom: 10px;

          .bottom-text {
            margin-top: 10px;
            padding-left: 15px;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;

            .text-item {
              padding: 5px;
            }
          }
        }
      }

    }

  }

</style>