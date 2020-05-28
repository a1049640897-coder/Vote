<template>
  <div id="act-list">
    <!--导航栏-->
    <nav-bar>
      <div slot="center">DEEP投票</div>
    </nav-bar>
    <!--    投票列表-->
    <scroll class="content" ref="scroll" :probe-type="2" @scroll="scrollPosition">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <msg-list :msg="msg" @imgLoad="imgLoad" @toActVote="toActVote"></msg-list>
      </van-pull-refresh>
    </scroll>
    <!--圆形按钮-->
    <circle-btn class="circle-btn" v-show="isAdmin" @click.native="showOverlay">
      <i class="iconfont iconstart"></i>
    </circle-btn>
    <van-overlay :show="show" @click="show = false" duration="1">
      <div class="container" @click.stop="hideOverlay">
        <div class="top">
          <div class="top-container">
            <div class="score-act" @click.stop="toCrt(score)">
              <div class="icon"><i class="iconfont iconscorex"></i></div>
              <div class="title">评分活动</div>
            </div>
            <span class="vertical"></span>
            <div class="vote-act" @click.stop="toCrt(vote)">
              <div class="icon"><i class="iconfont iconvotex"></i></div>
              <div class="title">投票活动</div>
              <div class="bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  //引入公共组件
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import CircleBtn from "components/common/circleBtn/CircleBtn";

  //引入子组件
  import MsgList from "./childComps/MsgList";
  import {Toast} from 'vant';
  //引入防抖函数
  import {debounce} from "common/untils";
//引入vant组件
  import {PullRefresh,Overlay} from 'vant';
  export default {
    name: "ActList",
    data() {
      return {
        msg: [],
        count: 0,
        isLoading: false,
        checked: true,
        isAdmin: Boolean,
        show: false,
        vote: true,
        score: false,
      }
    },
    components: {
      NavBar,
      Scroll,
      CircleBtn,

      MsgList,

      [PullRefresh.name]:PullRefresh,
      [Overlay.name]:Overlay,
    },
    computed: {},
    methods: {
      //图片更新进行更新refresh
      imgLoad() {
        debounce(this.$refs.scroll.refresh(), 3000);
      },
      //跳转到活动投票
      toActVote(value) {
        this.$router.push({
          path: '/actVote',
          query: {
            'msg': value,
          }
        })
      },
      //下拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$http.get('/getVoteList').then(res => {
            this.msg = res.data.voteList;
          });
          if (this.msg) {
            Toast('刷新成功');
            this.isLoading = false;
          } else {
            Toast('刷新失败');
          }
        }, 2000)
      },
      //判断位置，当位置超过顶部开始刷新
      scrollPosition(position) {
        if (position.y > 0) {
          this.isLoading = true;
          this.onRefresh();
        }
      },
      //显示遮罩层
      showOverlay() {
        this.show = true;
      },
      //隐藏遮罩层
      hideOverlay() {
        this.show = false;
      },
      //跳转到创建评分活动
      toCrt(type) {
        this.$router.push({
          path: '/crtAct',
          query: {
            type: type,
          }
        })
      },
    },
    //获取投票列表信息
    created() {
      this.$http.get('/getVoteList').then(res => {
        this.msg = res.data.voteList;
        this.isAdmin = res.data.status;
      })
    },
    mounted() {
    },
    destroyed() {
    }

  }
</script>

<style lang="scss" scoped>
  .content {
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

  .circle-btn {
    bottom: 30px;
    right: 30px;
  }

  .iconfont {
    font-size: 30px;
    color: #52A9FF;
  }

  .container {
    display: flex;
    height: 100%;

    .top {
      z-index: 2;
      position: fixed;
      background: #FFFFFF;
      /*box-shadow: 2px 2px 32px 0 rgba(0,0,0,0.50);*/
      width: 150px;
      bottom: 126px;
      right: 12px;
      padding: 15px;
      border-radius: 7em/8em;

      .top-container {
        display: flex;
        justify-content: space-between;

        .score-act {
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          text-align: center;

          .title {
            margin-top: 5px;
          }
        }

        .vote-act {
          @extend .score-act;
        }

        .vertical {
          border: 1px solid #CCCCCC;
        }
      }
    }

    .bottom {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 46%;
      right: 10%;
      background: #FFFFFF;
      transform: rotate(50deg);
      z-index: -1;
    }
  }

</style>