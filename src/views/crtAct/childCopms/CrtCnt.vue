<template>
  <div class="crt-main-container">
    <div class="crt-main">
      <div :class="[index===2?noBorderBottom:hasBorderBottom]" v-for="(item,index) in actCnt" :key="index">
        <div class="item-top">
          <div class="icon">
            <i :class="item.icon"></i> <span class="theme">{{item.title}}</span>
          </div>
        </div>
<!--活动时间和活动地点的样式-->
        <div class="time-and-addrss-bottom" v-if="index===3 || index===4">
            <div class="right-input" >
              <input type="text" :placeholder="'请输入'+item.title" v-model="actTime" @click="showPopup" v-show="index===3">
              <input type="text" :placeholder="'请输入'+item.title"  v-show="index===4">
            </div>
        </div>

        <!--其他活动的样式-->
        <div class="item-bottom" v-else>
          <!--活动封面的样式-->
          <div class="upload-container" v-if="index===2">
            <img :src="img" alt="" >
            <div class="upload">
              <van-uploader :after-read="afterRead">
                <div class="con">
                  <img src="~assets/img/common/pic.png" alt="">
                  <span>自定义样式</span>
                </div>
              </van-uploader>
            </div>
          </div>
          <div class="pic-input" v-if="index===2">
            <input type="text"  >
          </div>

          <div class="other-input" v-else>
            <input type="text" :placeholder="'请输入'+item.title" v-model="actTime" v-if="index===3">
            <input type="text" :placeholder="'请输入'+item.title" v-if="index===4">
            <input type="text" :placeholder="'请输入'+item.title" v-else>
          </div>

        </div>

      </div>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }" >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="show=false"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "CrtCnt",
    data() {
      return {
        actCnt: [
          {'icon': 'iconfont icontitlex', 'title': '活动主题'},
          {'icon': 'iconfont iconintroductionx', 'title': '活动简介'},
          {'icon': 'iconfont iconcoverx', 'title': '活动封面'},
          {'icon': 'iconfont iconcoverx', 'title': '活动时间'},
          {'icon': 'iconfont iconlocationx', 'title': '活动地点'},
        ],
        actSet:[

        ],
        pic: null,
        img:null,
        hasBorderBottom:'crtItem',
        noBorderBottom:'noBorder',
        show: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        actTime:'',
      }
    },
    methods: {
      afterRead(file) {
        this.img =file.content;
      },
      showPopup(){
        this.show =true;
      },
      //点击确认 输入活动时间
      confirm(value){
        var d = new Date(value);
        var changeTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        this.show=false;
        this.actTime =changeTime;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .crt-main-container {
    padding: 15px;
    background-color: white;

    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.15);
    border-radius: 15px 15px 0px 0px;

    .crt-main {
      width: 100%;

      .crtItem {
        border-bottom: 1px solid #CCCCCC;
        margin-bottom: 5px;

        .item-top {

          .icon {

            font-size: 16px;
            color: #52A9FF;
          }

          .theme {

            margin-left: 10px;
            font-size: 16px;
            color: #666666;
            letter-spacing: 0;
            text-align: center;
          }
        }

        .item-bottom {
          margin: 15px 0px;


          .upload-container {
            width: 100%;
            height: 100px;
            border: 1px solid #BEBEBE;
            border-radius: 10px;
            position: relative;

            img {
              width: 100%;
              height:100%;
            }

            .upload {
              position: absolute;
              top: 37Px;
              left: 92Px;
              .con {
                display: flex;
                img {
                  width: 30px;
                  height: 30px;
                }
                span {
                  font-size: 16px;
                  color: #CCCCCC;
                  margin-left: 10px;
                  margin-top: 5px;
                }
              }
            }
          }
          input {
            border: 0px;
          }
      .right-input {
       float: right;
        margin-top: -34Px;
      }
        }
        .time-and-addrss-bottom {
          margin-top: 20px;
          margin-bottom: 26Px;
          .right-input {
            float: right;
            margin-top: -39Px;

            input {
              border: 0px;
            }
          }
        }



      }
      .noBorder{
        @extend .crtItem;
        border-bottom: 0px;
      }
    }

  }

</style>