<template>
  <div id="rwd-vote-container">
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">{{title}}</div>
    </nav-bar>
    <scroll class="content" ref="scroll" >
      <!--投票/评分-->
      <rwd-top @changeVote="changeVote" @changeRnk="changeRnk" :type="btnType"></rwd-top>
      <!--投票/评分-->
      <rwd-bottom :list="list" v-show="voteIsShow" @imgLoad="imgLoad" @showVote="showVote" :btn-type="btnType" ></rwd-bottom>
      <!--排行榜-->
      <rnk-top :msg="top" v-show="rnkIsShow"></rnk-top>
      <rnk-bottom :btm="btm" v-show="rnkIsShow" ></rnk-bottom>
    </scroll>
    <!--弹窗-->
    <pop-up :show-data="showData"></pop-up>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import PopUp from "components/content/popup/PopUp";

  import RwdTop from "./childComps/RwdTop";
  import RwdBottom from "./childComps/RwdBottom";
  import RnkTop from "./childComps/RnkTop";
  import RnkBottom from "./childComps/RnkBottom";

  import {debounce} from "../../common/untils";
  import * as mutationsTypes from "store/mutation-types";

  export default {
    name: "RwdVote",
    components: {
      NavBar,
      Scroll,
      PopUp,

      RwdTop,
      RwdBottom,
      RnkTop,
      RnkBottom,
    },
    data() {
      return {
        title: '',
        list: [],
        top: {},
        btm: [],
        voteIsShow: true,
        rnkIsShow: false,
        showData:{},
        popUpIsShow: Boolean,
        btnType:true,
      }
    },
    methods: {
      //显示投票
      changeVote() {
        this.voteIsShow = true;
        this.rnkIsShow = false;
      },
      //显示排行榜
      changeRnk() {
        this.voteIsShow = false;
        this.rnkIsShow = true;
      },
      //scroll进行图片更新加载
      imgLoad() {
        debounce(this.$refs.scroll.refresh, 1000);
      },
      //展示投票弹窗
      showVote(item) {
        this.showData = item;
        this.$store.dispatch(mutationsTypes. CHANGE_POP_SHOW);
      },
    },
    created() {
      //获取标题
      this.title = this.$route.query.data.rwdTitle;
      //判断是投票还是评分
      this.btnType =this.$route.query.btnType;
      //获取奖项数据
      this.$http.get('/getDfRwdList').then(res => {
        this.list = res.data.rwdList;
      });
      //获取排行榜数据
      this.$http.get('/getRank').then(res => {
        this.top = res.data.rwd[0].rankTop;
        this.btm = res.data.rwd[0].rankBottom;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  #rwd-vote-container {
    background-color: rgb(245, 245, 245);

    .content {
      @include scroll-content
    }
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

  }
</style>