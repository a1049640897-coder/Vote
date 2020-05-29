<template>
  <div id="qus-text-container">
    <!--导航栏-->
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">{{$route.meta.title}}</div>
      <div slot="right" class="right" @click="showPopup">
        <van-icon name="exchange" size="20px"/>
      </div>
    </nav-bar>
    <scroll class="content">
    <div class="qus-text-box">
      <div class="qus-text">
        <!--显示第几页-->
        <div class="qus-text-page">
          <span class="page-number">1</span>
          <span class="page-all">/18</span>
          <span class="page-text">(多选)</span>
        </div>
        <!--显示问题-->
        <div class="qus-text-title">重庆很大，你平时周末去那里玩?</div>
        <!--选项-->
        <div class="qus-text-chose-container">
          <div class="chose-item" v-for="(item,index) in list.choose" :key="index">
            <div class="choose-btn">
              <van-checkbox v-model="item.isCheck" shape="round">
                <template #icon="props">
                  <van-icon name="circle"  />
                </template>
              </van-checkbox>
            </div>
            <div class="choose-text">{{item.name}}</div>
            <!--追问-->
            <div class="inquire-container" v-show="(item.name=='周边转转')&&(item.isCheck==true)" >
              <div class="inquire">追问:</div>
              <div class="inquire-choose" v-for="(btn,index) in item.inquire">
                <div class="inquire-choose-btn">
                  <van-checkbox v-model="btn.isCheck" shape="round">
                    <template #icon="props">
                      <van-icon name="circle"  />
                    </template>
                  </van-checkbox>
                </div>
                <div class="inquire-choose-text">
                  {{btn.title}}
                </div>
              </div>
            </div>
            <!--其他-->
            <div class="other-input" v-show="(item.name=='其他')&&(item.isCheck==true)">
              <van-field  type="textarea" style="border: 1px solid #cccccc" />
            </div>
          </div>
        </div>
      </div>
     <div class="change-page-btn">
       <div class="previous">上一题</div>
       <div class="next">下一题</div>
     </div>
    </div>
    </scroll>
    <van-popup v-model="show" position="right" :style="{height:'100vh',width:'70%'}">
      <div class="qus-list-container">
        <div class="qus-list">
          <div class="qus-list-top">{{qusList.title}}</div>
          <div class="qus-list-item" v-for="(item,index) in qusList.list">
            <div class="item-number">0{{index}}</div>
            <div class="item-text">{{item.title}}</div>
            <div class="item-check">
              <van-checkbox v-model="item.isChecked"></van-checkbox>
            </div>
          </div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import {Field,Button,Radio,RadioGroup,Icon,Checkbox,Popup} from 'vant';

  export default {
    name: "QusText",
    data() {
      return {
        show: false,
        checked:true,

        list:
          {
            'choose': [
              {'isCheck': false, 'name': '解放碑'},
              {'isCheck': false, 'name': '江边'},
              {'isCheck': false, 'name': '周边转转','inquire':[{'isCheck':false,'title':'商场'},{'isCheck':false,'title':'公园'}]},
              {'isCheck': false, 'name': '文旅'},
              {'isCheck': false, 'name': '其他'}
            ]
          },
        qusList:{
            'title':'问题列表',
           'list':[
             {'title':'周末去那里玩','isChecked':true},
             {'title':'哪里最时尚','isChecked':true},
             {'title':'大当家撒进度款撒','isChecked':true},
             {'title':'职业发展的看法','isChecked':false}
             ],
        }

      }
    },
    components: {
      [Field.name]:Field,
      [Button.name]:Button,
      [Radio.name]:Radio,
      [RadioGroup.name]:RadioGroup,
      [Icon.name]:Icon,
      [Checkbox.name]:Checkbox,
      [Popup.name]:Popup,

      NavBar,
      Scroll,
    },
    methods: {
      showPopup() {
        this.show = true;
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";
  #qus-text-container {
    height: 100vh;
    background-color: rgb(245,245,245);
    .content{
      @include scroll-content;
    }
    .qus-list-container {
      background: rgb(68,68,68);
      height: 100vh;
      padding: 15px;
      .qus-list {
        width: 100%;
        .qus-list-top {
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0;
          padding-bottom: 15px;
          border-bottom: 1px solid #cccccc ;
        }
        .qus-list-item {
          margin-top: 20px;
          display: flex;
          justify-content: flex-start;
          .item-number {
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: 0;

          }
          .item-text {
            @extend .item-number;
            flex: 1;
            margin-left: 10px;
            margin-top: -1%;
          }
        }
      }
    }
    .right {
      text-align: center;
      margin-top: 4px;
    }

    .qus-text-box {
      height:100%;
      padding: 15px;
      .change-page-btn {
        display: flex;
        justify-content: center;
       .previous {
         border-radius: 24px;
         font-size: 16px;
         color: #FFFFFF;
       text-align: center;
         padding: 10px;
         margin: 5px;
         flex: 1;
         background: #CCCCCC;
       }
        .next {
          @extend .previous;
          background: #52A9FF;
        }
      }
      .qus-text {
        width: 100%;

        .qus-text-page {
          .page-number {
            font-size: 21px;
            color: #52A9FF;
            letter-spacing: 0;
          }

          .page-all {
            font-size: 16px;
            color: #3F3F3F;
            letter-spacing: 0;
            line-height: 29px;
          }

          .page-text {
            font-size: 16px;
            color: #999999;
            letter-spacing: 0;
            margin-left: 10px;
          }
        }

        .qus-text-title {
          font-size: 16px;
          color: #333333;
          padding: 10px 0px;
          letter-spacing: 0;
        }

        .qus-text-chose-container {
          width: 100%;
         background: white;

          .chose-item {
             /*display: flex;*/
             padding: 15px;
             margin-bottom: 5px;
            .choose-text {
              font-size: 14px;
              color: #666666;
              letter-spacing: 0;
              margin-left: 30px;
            }
            .choose-btn {
              float: left;
            }
            .other-input {
            margin-top: 20px;
            }
            .inquire-container{
             display: flex;
              font-size: 14px;
              color: #52A9FF;
              letter-spacing: 0;
              margin-top: 15px;
              margin-left: 14px;
              .inquire-choose {
                display: flex;
                .inquire-choose-btn {
                  margin-left: 10px;
                }
                .inquire-choose-text{
                  font-size: 14px;
                  color: #999999;
                  letter-spacing: 0;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }

    }

  }

</style>