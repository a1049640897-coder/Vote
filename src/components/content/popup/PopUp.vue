<template>
  <div class="pop-up-container">
    <van-overlay :show="$store.state.popUpIsShow" duration="0.5">
      <div class="outer">
        <div class="inside">
          <!--头像部分-->
          <div class="inside-top">
            <div class="avatar">
              <img v-lazy="$store.state.showData.avatar" alt="">
            </div>
            <div class="text">
              <div class="title">{{$store.state.showData.title}}</div>
              <div class="number  ">编号&nbsp;:&nbsp;{{$store.state.showData.number}}</div>
              <div class="dancer"> 表演者&nbsp;:&nbsp;{{$store.state.showData.dancer}}</div>
            </div>
          </div>
          <!--奖项/评分-->
          <div class="inside-center" >
            <div :class="checkbox.includes(index) ? backGround :centerItem " v-for="(item,index) in rewards"
                  @click.stop="changeBg(index)" v-show="btnType" >
              {{item}}
            </div>
            <div class="score" v-for="(item,index) in score" v-show="!btnType" >
              <div class="title">{{item.title}}</div>
              <div class="slider" >
                <van-slider v-model="item.value" bar-height="4px"  active-color="#ee0a24" />
              </div>
              <div class="number">{{item.value}}分</div>
            </div>
          </div>

          <!--投票按钮-->
          <div class="inside-btn" v-show="btnType" @click="submitVote">
            提交投票
          </div>
          <!--评分按钮-->
          <div class="inside-slider" v-show="!btnType" @click="submitScore">
            提交评分
          </div>
          <!--底部关闭按钮-->
          <div class="close" @click.stop="hideVote">
            <i class="iconfont iconclose"></i>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import * as mutationsTypes from "store/mutation-types";

  export default {
    name: "PopUp",
    data() {
      return {
        rewards: ['最佳男歌手', '最佳组合', '最美台风', '最具创新', '最佳人气'],
        score: [{'title': '歌唱技巧', 'value': 0}, {'title': '现场互动', 'value': 0}, {'title': '舞台表现', 'value': 0}],
        actived: -1,
        centerItem: 'centerItem',
        backGround: 'actived',
        checkbox: [],
        value: 50,
        scoreIndex:Number,//不同的评分数据的index
        voteIndex:Number,//不同的投票数据的index

      }
    },
    props: {
      btnType: Boolean,
    },
    methods: {
      //隐藏投票弹窗
      hideVote() {
        this.$store.dispatch(mutationsTypes.CHANGE_POP_SHOW,'');
      },
      //改变选中状态
      changeBg(index) {
        // console.log(index);
        var id = this.checkbox.indexOf(index);
        if (id > -1) {
          this.checkbox.splice(id, 1)
        } else {
          this.checkbox.push(index);
        }
      },
      //
      submitVote(){
        console.log(this.checkbox);
        this.checkbox =[];
        this.$store.dispatch(mutationsTypes.CHANGE_POP_SHOW,'');
      },
      submitScore(){
        this.score= [{'title': '歌唱技巧', 'value': 0}, {'title': '现场互动', 'value': 0}, {'title': '舞台表现', 'value': 0}];
        this.$store.dispatch(mutationsTypes.CHANGE_POP_SHOW,'');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .outer {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
  }

  .inside {
    padding: 15px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 3);
    position: relative;
    margin-top: -20%;

    .inside-top {
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #CCCCCC;

      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 100%;

        img {
          width: 64px;
          height: 64px;
          border-radius: 100%;
        }
      }

      .text {
        margin-left: 15px;
        position: relative;

        .title {
          font-size: 16px;
          color: #666666;
          letter-spacing: 0;
          line-height: 37px;
        }

        .number {
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          float: left;
        }

        .dancer {
          @extend .number;
          margin-left: 20px;
          margin-right: 50px;
        }
      }
    }

    .inside-center {
      display: flex;
      flex-wrap: wrap;

      .centerItem {
        border: 2px solid rgba(204, 204, 204, 0.74);
        padding: 8px 15px;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        border-radius: 20px;
        margin-top: 15px;
        margin-left: 15px;
      }

      .score {
        position: relative;

        .title {
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          margin-top: 15px;
        }

        .slider {
          margin-top: 20px;
          width: 260px;
        }

        .number {
          position: absolute;
          font-size: 14px;
          color: #52A9FF;
          letter-spacing: 0;
          text-align: center;
          top: 79%;
          right: -55px;
        }
      }

    }

    .inside-btn {
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      border-radius: 10px;
      background: #52A9FF;
      padding: 20px 15px;
      text-align: center;
      margin-top: 40%;
    }

    .inside-slider {
      @extend .inside-btn;
      margin-top: 15%;
    }
  }

  .close {
    top: 104%;
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: rgba(0, 0, 0, 0.42);

    left: 40%;

    .iconclose {
      font-size: 27px;
      margin: auto;
    }
  }

  .actived {
    background-color: #52A9FF;
    border: 2px solid rgba(204, 204, 204, 0.74);
    padding: 8px 15px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    border-radius: 20px;
    margin-top: 15px;
    margin-left: 15px;
  }


</style>