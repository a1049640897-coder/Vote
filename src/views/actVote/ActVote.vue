<template>
  <div id="act-vote">
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">活动投票</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <act-msg :msg="msg" @load="imgLoad"></act-msg>
      <act-rwd :rwd="rwd" v-show="setShow" :is-show="btnType"></act-rwd>
      <act-pgm :pgm="pgm" v-show="!setShow" :btn-type="btnType"></act-pgm>
    </scroll>
    <circle-btn class="circle-btn" @click.native="changeCodeIsShow">
      <i class="iconfont iconQR_codex"></i>
    </circle-btn>
    <act-ctrl v-show="!$store.state.codeIsShow" @click.native="showCutDwn"></act-ctrl>
    <act-code :msg="msg" v-show="$store.state.codeIsShow"></act-code>
    <act-cut-dwn v-show="$store.state.countDownIsShow"></act-cut-dwn>
    <pop-up :btn-type="btnType"></pop-up>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import CircleBtn from "components/common/circleBtn/CircleBtn";
  import PopUp from "components/content/popup/PopUp";

  import ActMsg from "./childCopms/ActMsg";
  import ActRwd from "./childCopms/ActRwd";
  import ActPgm from "./childCopms/ActPgm";
  import ActCtrl from "./childCopms/ActCtrl";
  import ActCode from "./childCopms/ActCode";
  import ActCutDwn from "./childCopms/ActCutDwn";

  import Scroll from "components/common/scroll/Scroll";
  import * as mutationsTypes from "store/mutation-types";

  export default {
    name: "ActVote",
    data() {
      return {
        msg: {},
        rwd: [],
        pgm: [],
        setShow: Boolean, //节目类型:false, 奖项类型:true,
        btnType: true, //判断 投票true ， 评分:false,

      }
    },
    methods: {
      //每次加载进行图片的更新
      imgLoad() {
        this.$refs.scroll.refresh();
      },
      //改变二维码页面显示状态
      changeCodeIsShow() {

        this.$store.dispatch(mutationsTypes.CHANGE_CODE_SHOW);
      },
      //改变控制面板显示转态
      showCutDwn() {
        this.$store.dispatch(mutationsTypes.CHANGE_CUT_DWN_SHOW);
      }
    },
    components: {
      NavBar,
      CircleBtn,
      PopUp,

      ActMsg,
      ActRwd,
      ActPgm,
      ActCtrl,
      ActCode,
      ActCutDwn,

      Scroll
    },
    mounted() {
      //获取活动个投票头部信息
      this.$http.get('/getActTop').then(res => {
        this.msg = res.data.voteList;
      })

      // this.isShow = this.msg.activityType.boolean;
      //获取奖项
      this.$http.get('/getRwdList').then(res => {
        this.rwd = res.data.rwdList;
      })
      //获取节目
      this.$http.get('/getPgmListData').then(res => {
        this.setShow = res.data.boolean.setType.boolean;
        this.btnType =Boolean(res.data.boolean.btnType.boolean);
        this.pgm = res.data.PgmList;
      })

    }
  }
</script>

<style lang="scss" scoped>
  #act-vote {
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

    .iconQR_codex {
      font-size: 30px;
      color: #52A9FF;
    }
  }
</style>