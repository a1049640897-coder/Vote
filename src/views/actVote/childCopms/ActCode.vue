<template>

  <div class="act-code-container" ref="code">
    <!--二维码-->
    <div class="act-code">
      <div class="code-img">
        <img v-lazy="msg.activityPic">
      </div>
      <div class="code-title">{{ msg.activityTitle}}</div>
      <div class="code-time">
        <i class="iconfont iconclockx"><span>{{ msg.activityTime}}</span></i>
      </div>
      <div class="code-adrs">
        <i class="iconfont iconlocationx"><span>{{ msg.activityAddress}}</span></i>
      </div>
      <div class="qr-code">
        <img src="~assets/img/common/code.png" alt="">
      </div>
      <div class="close" @click="closeCodeShow">
        <i class="iconfont iconclose"></i>
      </div>
    </div>
    <!--底部活动和评分-->
    <div class="title">
      <div :class="[isActShow ? actived: normal]" @click="changeAct">活动</div>
      <div :class="[isSceShow ? actived: normal]" style="margin-left: 10px" @click="changeSce">评分</div>
    </div>
    <!--底部按钮-->
    <div class="btm-btn">
      <div class="down-load" @click="downLoad">
        <circle-btn class="btn">
          <i class="iconfont icondownloadx"></i>
        </circle-btn>
      </div>
      <div class="share" @click="showPopup" ref="share">
        <circle-btn class="btn">
          <i class="iconfont iconsharex"></i>
        </circle-btn>
      </div>
    </div>
    <!--底部弹窗-->
    <div class="pop-ups">
      <van-popup v-model="show" :get-container="getContainer"/>
      <van-popup v-model="show" position="bottom" :style="{ height: '20%' }" round>
        <van-divider :style="{ padding: '0px 80px',background: '#AAAAAA;' }">分享到</van-divider>
        <div class="btm-icon">
          <div class="qq">
            <circle-btn>
              <i class="iconfont iconqq"></i>
            </circle-btn>
          </div>
          <div class="we-chat">
            <circle-btn>
              <i class="iconfont iconweixin"></i>
            </circle-btn>
          </div>
          <div class="wei-bo">
            <circle-btn>
              <i class="iconfont iconweibo-fill"></i>
            </circle-btn>
          </div>
        </div>
      </van-popup>
    </div>
  </div>

</template>

<script>
  import CircleBtn from "components/common/circleBtn/CircleBtn";
  import html2canvas from 'html2canvas'
  import * as mutationsTypes from "store/mutation-types";

  import {Popup} from 'vant';

  export default {
    name: "ActCode",
    components: {
      CircleBtn,

      [Popup.name]:Popup,
    },
    data() {
      return {
        isActShow: true,
        isSceShow: false,
        normal: 'normal',
        actived: 'actived',
        show: false,
        url: '',//需要转化的图片链接
        changedUrl: '',//已经转化为base64的图片格式
      }
    },
    props: {
      msg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      //活动变为活跃
      changeAct() {
        this.isActShow = true;
        this.isSceShow = false;
      },
      //评分变为活跃
      changeSce() {
        this.isActShow = false;
        this.isSceShow = true;
      },
      //点击下载 存在的bug 当v-lazy结束显示mock图片以后 点击下载就无法显示出来mock的图片 是存在跨域问题
      downLoad() {
        html2canvas(this.$refs.code, {
          allowTaint: false,   //允许污染
          taintTest: true,    //在渲染前测试图片(没整明白有啥用)
          useCORS: true,      //使用跨域(当allowTaint为true时这段代码没什么用,下面解释)
          background: "#fff",
        }).then(function (canvas) {
          var dataURL = canvas.toDataURL("image/png");
          var a = document.createElement('a');
          // a.download = name || 'pic'
          // a.setAttribute("href",dataURL)
          a.download = '二维码';
          a.href = dataURL;
          a.click();
        })
      },
      //展示底部圆角弹窗
      showPopup() {
        this.show = true;
      },

      // 返回一个特定的 DOM 节点，作为挂载的父节点
      getContainer() {
        return this.$refs.share;
      },

      //关闭二维码页面
      closeCodeShow() {
        this.$store.dispatch(mutationsTypes.CHANGE_CODE_SHOW);
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  .act-code-container {
    @include over-bg;

    .act-code {
      width: 315px;
      /*height: 200px;*/
      margin-left: 30px;
      position: relative;
      margin-top: 30px;
      background-color: white;
      border-radius: 10px;

      .code-img {


        img {
          width: 100%;
          height: 100%;
          border-radius: 10px 10px 0px 0px;

        }
      }

      .code-title {
        padding: 10px 10px 10px 10px;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
      }

      .code-time {
        padding: 10px 10px 10px 10px;

        span {
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          margin-left: 5px;
        }

        .iconfont {
          font-size: 16px;
          color: #52A9FF;
        }
      }

      .code-adrs {
        @extend .code-time;
        border-radius: 0px 0px 10px 10px;
      }

      .qr-code {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 150px;
        right: 15px;

        img {
          width: 100px;
          height: 100px;
        }
      }

      .close {
        position: absolute;
        z-index: 9;

        .iconclose {
          font-size: 25Px;
          color: #999999;
        }

        top: -10Px;
        right: -9Px;

      }
    }

    .title {
      margin-top: 5px;
      width: 300px;
      padding: 10px;
      margin-left: 30px;
      display: flex;
      justify-content: flex-start;

      .actived {
        font-size: 22px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
      }

      .normal {
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 35px;
      }
    }

    .btm-btn {
      display: flex;
      width: 150px;
      margin-left: 200px;

      .down-load, .share {
        flex: 1;

        .iconfont {
          font-size: 16px;
          color: #52A9FF;
        }
      }
    }

    .pop-ups {

      .btm-icon {
        display: flex;
        margin-left: 20%;
        width: 64%;

        .qq, .we-chat, .wei-bo {
          color: white;
          flex: 1;

        }

        .qq {
          .circle-btn {
            background-color: #4A9AFD;
          }
        }

        .we-chat {
          flex: 1;

          .circle-btn {
            background-color: #50B674;
          }
        }

        .wei-bo {
          .circle-btn {

            background-color: #EA5D5C;;
          }
        }
      }
    }
  }

</style>