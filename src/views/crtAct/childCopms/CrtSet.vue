<template>
  <div class="crt-set-container">
    <div class="crt-set">
      <div :class="[index=== 2 ? normal:setItem]" v-for="(item,index) in list" :key="index">
        <div class="left">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <!--标题-->
          <div class="title" v-if="index===3">
            <div class="vote" v-show="type">
              <span v-show="!set" >{{item.title.pgmTitle}}</span>
              <span v-show="set">{{item.title.voteTitle}}</span>
            </div>
            <div class="score" v-show="!type">
              <span >{{item.title.maxScore}}</span>
            </div>
          </div>
          <div class="title" v-else>{{item.title}}</div>
        </div>
        <!--项目-->

        <div class="right" @click.stop="showPopup(index)">
          <div class="text" v-if="index===0">
            <span v-show="type">  {{item.demo.vote}}</span>
            <span v-show="!type"> {{item.demo.pgm}}</span>
          </div>

          <div class="text" >{{item.text}}</div>
        </div>

        <div class="rwd-item" v-show="index===2">
          <div class="item-box" v-for="(item) in rwdList" >
            <div class="text-left">
              <div class="rwd-icon" @click="deleteAddRwds(item)"><i class="iconfont iconminusx"></i></div>
            </div>
            <div class="text-right">
              <van-field
                placeholder="奖项名称"
                input-align="left"
                v-model="item.rwdName"
              />
              <van-field
                placeholder="评选维度"
                input-align="center"
                v-model="item.appraisal"
                v-show="!set"
              />
              <van-field
                placeholder="输入奖励"
                input-align="right"
                v-model="item.rwd"
              />
            </div>
          </div>

        </div>
        <div class="add-rwd" v-show="index==2" @click="AddRwds">
          <div class="icon">
            <i class="iconfont iconaddx"></i>
          </div>
          <div class="title">添加奖项</div>
        </div>

      </div>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="otherOnConfirm"
        v-show="otherShow"
      />
      <van-picker
        show-toolbar
        :columns="rwds"
        @cancel="showPicker = false"
        v-show="rwdShow"
      />
      <van-datetime-picker v-model="beginCurrentTime" type="time" :filter="filter" v-show="voteBeginTime"
                           @confirm="beginOnConfirm" @cancel="showPicker = false"/>
      <van-datetime-picker v-model="endCurrentTime" type="time" :filter="filter" v-show="voteEndTime"
                           @confirm="endOnConfirm" @cancel="showPicker = false"/>
    </van-popup>
  </div>
</template>

<script>

import {Popup,Picker,DatetimePicker,Field} from 'vant';
  export default {
    name: "CrtSet",
    data() {
      return {
        list: [
          {
            'icon': 'iconfont icontypex',
            'title': '活动类型',
            'demo': {'pgm': '评分活动', 'vote': '投票活动'},
            'columns': ['投票活动', '评分活动']
          },
          {
            'icon': 'iconfont icontypex',
            'title': '评比对象',
            'text': '奖项',
            'columns': ['奖项', '节目']
          },
          {'icon': 'iconfont iconprizex', 'title': '活动奖项', 'rwds': ['最佳男歌手', '最佳女歌手']},
          {
            'icon': 'iconfont iconlimitx',
            'title': {'pgmTitle': '每个节目可投奖个数', 'voteTitle': '每个奖项可投票数','maxScore':'满分上限'},
            'text': '请选择',
            'columns': ['10', '20', '30', '40']
          },
          {'icon': 'iconfont iconclockx', 'title': '投票开始时间', 'text': '请选择开始时间'},
          {'icon': 'iconfont iconclockx', 'title': '投票结束时间', 'text': '请选择结束时间'},
        ],
        value: '',
        showPicker: false,
        columns: [],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        currentIndex: -1,
        setItem: 'setItem',
        normal: 'normal',
        rwds: ['最佳男歌手'],//展示奖项选择
        otherShow: true, //显示 类型 对象 可投票数
        rwdShow: false,
        rwdList: [
          {'rwdName':'','appraisal':'','rwd':''}
        ],//添加的奖项
        // type: false, //是投票类型 true  评分类型 false
        set:false, //是奖项类型 true， 是节目false,
        beginCurrentTime: '00:00',//投票开始现在时间
        endCurrentTime: '00.00',//投票结束现在时间
        voteBeginTime: false,
        voteEndTime: false,
        index:Number,//用来存储用户点击的index
      }
    },
    components:{
      [Popup.name]:Popup,
      [Picker.name]:Picker,
      [DatetimePicker.name]:DatetimePicker,
      [Field.name]:Field,
    },
    methods: {
      otherOnConfirm(value) {
        this.list[this.index].text =value;
        if (value==="奖项"){
          this.set=true;
        }else {
          this.set=false;
        }
        console.log(value);
        this.showPicker = false;
        this.currentIndex = -1;
        this.list[this.index].text=value;
      },
      showPopup(index) {
        if (index === 4) {
          this.showPicker = true;
          this.rwdShow = false;
          this.otherShow = false;
          this.voteBeginTime = true;
          this.voteEndTime = false;
          this.index =index;

        } else if (index === 5) {
          this.showPicker = true;
          this.rwdShow = false;
          this.otherShow = false;
          this.voteBeginTime = false;
          this.voteEndTime = true;
          this.index =index;
        }else if (index===0){
          this.showPicker = false;
        }
          else {
          this.showPicker = true;
          this.currentIndex = index;
          this.columns = this.list[index].columns;
          this.rwdShow = false;
          this.otherShow = true;
          this.voteBeginTime = false;
          this.voteEndTime = false;
          this.index =index;
        }
      },
       //添加奖项
      AddRwds() {
        this.rwdList.push({'rwdName':'','appraisal':'','rwd':''});
      },
      //删除奖项
        deleteAddRwds(item) {
        let delId = this.rwdList.indexOf(item);
        this.rwdList.splice(delId, 1);
      },
      //投票开始确认
      beginOnConfirm(value) {
        this.list[this.index].text=value;
        this.showPicker =false;
      },
      //投票结束确认
      endOnConfirm(value) {
        this.list[this.index].text=value;
        this.showPicker =false;
      },
      //进行自定义时间
      filter(type, options) {
        if (type === 'minute') {
          return options.filter((option) => option % 5 === 0);
        }
        return options;
      },
    },
    props :{
      type:Boolean,
    }

  }
</script>

<style lang="scss" scoped>
  .crt-set-container {
    padding: 15px;
    background-color: white;

    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.15);
    border-radius: 15px 15px 0px 0px;

    .crt-set {
      .setItem {
        /*display: flex;*/
        /*justify-content: space-between;*/
        border-bottom: 1px solid #CCCCCC;
        padding: 0Px 0px 28px 0px;
        margin-bottom: 10px;


        .left {
          .icon {
            float: left;
            font-size: 16px;
            color: #52A9FF;
          }

          .title {
            font-size: 16px;
            margin-left: 28Px;

          }
        }

        .right {
          .text {
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
            float: right;
            margin-top: -20px;
          }
        }

        .rwd-item {
          .text-left {
            .rwd-icon {
              font-size: 16px;
              color: red;
              margin-top: 15px;
            }
          }

          .text-right {
            display: flex;

            justify-content: space-between;
            margin-top: -33px;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
            margin-left: 40px;
            border-bottom: 1px dotted #CCCCCC;
          }
        }

        .add-rwd {
          display: flex;
          margin-top: 20px;

          .icon {
            font-size: 16px;
            color: #52A9FF;
          }

          .title {
            font-size: 14px;
            color: #52A9FF;
            letter-spacing: 0;
            margin-left: 20px;
          }
        }

      }

      .normal {
        @extend .setItem;
        border-bottom: 0px;
      }
    }


  }

</style>