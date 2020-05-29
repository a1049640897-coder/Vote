<template>
  <div id="qus-basic-info-container">
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">{{$route.meta.title}}</div>
    </nav-bar>
    <scroll class="content">
    <div class="qus-basic-info-box">
      <div class="qus-basic-info">
        <div class="title">基本信息填写</div>
        <div class="input-container">
          <div class="input-item" v-for="(item,index) in text" :key="index">
            <div class="item-left">{{item.title}}</div>
            <div class="item-check" v-if="index===1" style="border: 0px">
              <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="2">否</van-radio>
              </van-radio-group>
            </div>
            <div class="item-comit" v-else-if="index===11" >
              <van-field  label-align="right"  input-align="right"  class="right-input"  v-model="item.value"/>
            </div>
            <div class="item-right" v-else >
              <van-field  label-align="right"  input-align="right"  class="right-input" v-model="item.value"/>
            </div>
            <span v-show="index===0||index===2||index===3">*</span>
          </div>
        </div>
      </div>
      <div class="next-btn" @click="toQusText">
        <van-button type="primary" size="large" round color="#52A9FF">下一步</van-button>
      </div>
    </div>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import {Field,Button,Radio,RadioGroup} from 'vant';

  export default {
    name: "QusBasicInfo",
    data(){
      return {
        text:[
          {'title':'调研人员','value':''},  {'title':'是否有录音','value':''},
          {'title':'受访者姓名','value':''},  {'title':'受访者电话','value':''},
          {'title':'受访者年龄','value':''},  {'title':'受访者性别','value':''},
          {'title':'受访者学历','value':''},  {'title':'受访者所在行业','value':''},
          {'title':'受访者所在公司','value':''},  {'title':'受访者职位','value':''},
          {'title':'受访者职级','value':''},  {'title':'谈访者及情况备注','value':''},
        ],
        radio: '',
      }
    },
    components:{
      [Field.name]:Field,
      [Button.name]:Button,
      [Radio.name]:Radio,
      [RadioGroup.name]:RadioGroup,

      NavBar,
      Scroll,
    },
    methods:{
      //跳转到问卷调查开始页面
      toQusText(){
          this.$router.push('/qusText');
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";
  #qus-basic-info-container {
    height: 100vh;
    background-color: rgb(245, 245, 245);
    .content {
      @include scroll-content;
    }
    .qus-basic-info-box {
      padding: 15px;
      .qus-basic-info {
        width: 100%;
       .title{
         font-size: 16px;
         color: #999999;
         letter-spacing: 0;
         margin-bottom: 10px;
       }
        .input-container {
          padding: 15Px 30Px;
          background-color: white;
          .input-item {
            display: flex;
            margin-bottom: 10px;

            span {
              font-size: 16px;
              color: #FF2E2E;
              letter-spacing: 0;
             margin-top: 16px;
             margin-left:-8%;
              margin-right: 5%;
            }
            .item-left  {
              font-size: 14px;
              color: #666666;
              letter-spacing: 0;
              line-height: 41Px;
              flex: 0.8;
              display: flex;
              justify-content: flex-end;
              margin-right: 10px;
            }
            .item-right {
              border: 1px solid #cccccc;
              flex: 0.9;
              margin-right: 8%;
            }
            .item-comit {
               @extend .item-right;
               padding: 10px 0px;
            }
            .item-check {
              margin-top: 12px;
              margin-right:5%;
            }
          }
        }
      }
    }
    .next-btn {
      margin-top: 10px;
    }
  }
</style>