`<template>
  <div class="rwd-bottom-container">
    <div class="rwd-bottom">
      <div class="bottom-item" v-for="(item,index) in list" :key="index">
        <div class="avatar">
          <img v-lazy="item.avatar" alt="" @load="imgLoad">
        </div>
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="number">编号:&nbsp;{{item.number}}</div>
          <div class="dancer">表演者&nbsp;:&nbsp;{{item.dancer}}</div>
        </div>
        <div class="vote" v-show="btnType">
          <div class="number">{{item.count}}票</div>
          <div class="vote-btn">
            <van-button round type="info" @click="vote(index)"  v-if="voteIndex.includes(index)" disabled>投票</van-button>
            <van-button round type="info" @click="vote(index)"  v-else>投票</van-button>
          </div>
        </div>
        <div class="score" v-show="!btnType">
          <div class="number">
            <span class="average">平均</span>&nbsp;:&nbsp;{{item.count}}</div>
          <div class="input">
            <input type="text" placeholder="输入分数">
          </div>
        </div>
      </div>
      <div class="score-btn" v-show="!btnType">
        <van-button type="primary" size="large">提交评分</van-button>
      </div>
    </div>

  </div>
</template>

<script>
  import * as mutationsTypes from "store/mutation-types";
  export default {
    name: "RwdBottom",
    data() {
      return {
        show: false,
        rewards: ['最佳男歌手', '最佳组合', '最美台风', '最具创新', '最佳人气'],
        showData: {},
        actived: -1,
        centerItem: 'centerItem',
        backGround: 'actived',
        checkbox: [],
        voteIndex:[-1],
      }
    },
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      },
      btnType:Boolean, //判断类型 投票是true,评分是false

    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad');
      },
      //投票
      vote(index) {
        this.voteIndex.push(index);
        console.log(this.voteIndex.includes(index));
      },


    }
  }
</script>

<style lang="scss" scoped>
  .rwd-bottom-container {
    padding: 15px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.15);
    border-radius: 15px 15px 0px 0px;

    .rwd-bottom {
      width: 100%;

      .bottom-item {
        border-bottom: 1px solid #CCCCCC;
        padding-bottom: 80px;
        margin-bottom: 10px;

        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 100%;
          float: left;

          img {
            width: 64px;
            height: 64px;
            border-radius: 100%;
          }
        }

        .text {
          float: left;
          margin-left: 10px;

          .title {
            font-size: 16px;
            color: #666666;
            font-weight: bold;
          }

          .number, .dancer {
            margin-top: 3px;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
          }
        }

        .vote {
          float: right;

          .number {
            font-size: 14px;
            color: #52A9FF;
            letter-spacing: 0;
            text-align: center;
          }

          .vote-btn {
            margin-top: 5px;
          }
        }

        .score {
          margin-top: 10Px;
          @extend  .vote;
          .number{
            letter-spacing: 0;
          }
          .average {
            @extend .number;
            margin-left: -5px;
            color: #999999;
          }
          .input {
            margin-top: 10px;
            margin-left: -8px;
            input {
              height: 20Px;
              width: 72Px;
              background: #F1F1F1;
              border-radius: 5px;
              text-align: center;
              border: 0px;
            }
          }
        }
      }
    }
    .score-btn {

    }
  }
</style>