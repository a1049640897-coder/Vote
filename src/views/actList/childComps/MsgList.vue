<template>
  <!--最外层-->
  <div class="msg-container">
    <!--单个列表的盒子-->
    <div class="msg-item" v-for="(item,index) in msg" :key="index" @click="toActVote(item)">
       <div class="item-img">
         <img v-lazy="item.activityPic" alt="" @load="imgLoad">
       </div>
      <div class="title">{{item.activityTitle}}</div>
      <div class="count">
        <div class="competition"><i class="iconfont iconuser"></i>&nbsp;&nbsp;{{item.participantCount}}人参赛</div>
        <div class="has-count"><i class="iconfont iconvotex"></i>&nbsp;&nbsp;{{item.voteCount}}已投</div>
        <div class="hot-count"><i class="iconfont iconfirex"></i>&nbsp;&nbsp;{{item.hotCount}}热度</div>
      </div>
      <div class="vote-end">投票结束:{{item.activityTime}}</div>
    </div>
  </div>

</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "MsgList",
    data(){
      return{
        isLoading: false,
        count: 0,
        checked: true,
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      },
      //下拉刷新
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
        },2000)
      },
      //跳转到活动投票页面
      toActVote(item){
        this.$emit('toActVote',item);
      }
    },
    props:{
      msg:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .msg-container{
    padding: 0px 10px 0px 10px;
    .msg-item{
      width: 100%;
      margin-top: 10px;
      .item-img img{
        width: 100%;
        height: 100%;
      }
      .title{
        margin: 10px 0px 10px 10px;
        font-weight: bold;
        font-size: 18px;
        color: #333333;
        margin-left: 1px;
      }
      .count{
        display: flex;
        margin-top: 10px;
        .competition,.has-count,.hot-count{
          flex: 1;
          font-size: 14px;
          color: #888888;
        }
        .iconfont{
             color: #52A9FF;
           }
      }
      .vote-end{
        font-size: 12px;
        color: #999999;
        margin-top: 10px;
      }


    }
 }
</style>