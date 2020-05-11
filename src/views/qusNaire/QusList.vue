<template>
  <div id="qus-list-container">
    <!--导航栏-->
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">问卷调查</div>
    </nav-bar>
    <scroll class="content">
    <div class="qus-list-box">
      <div class="qus-list">
        <div class="list-item" v-for="(item,index) in list">
          <div class="item-left">
            <div class="number">0{{index}}</div>
            <div class="name">{{item.name}}</div>
          </div>
          <div class="item-right">
            <div class="year">{{item.qusYear}}</div>
            <div class="time">{{item.qusTime}}</div>
          </div>
        </div>
      </div>
    </div>
    </scroll>
   <circle-btn class="cir-btn" @click.native="toQusBasicInfo">
     <i class="iconfont iconadd_listx"></i>
   </circle-btn>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import CircleBtn from "components/common/circleBtn/CircleBtn";

  export default {
    name: "QusList",
    data(){
      return {
        list:[],
      }
    },
    components: {
      NavBar,
      Scroll,
      CircleBtn,
    },
    methods:{
      toQusBasicInfo(){
        this.$router.push('/qusBasicInfo');
      }
    },
    created() {
      this.$http.get('/getQusList').then(res=>{
        this.list = res.data.list;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";
  #qus-list-container {
    height: 100vh;
    background-color: rgb(245,245,245);
    .content{
      @include scroll-content;
    }
    .qus-list-box {
      padding: 20px 15px;

      .qus-list {
        width: 100%;
        .list-item {
          background-color: white;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          margin-bottom: 10px;
          .item-left {
            display: flex;

            .number {
              width: 30px;
              height: 30px;
              border-radius: 100%;
              text-align: center;
              background: #52A9FF;
              font-size: 14px;
              color: #FFFFFF;
              line-height: 28px
            }
            .name {
              line-height: 28px;
              margin-left: 10px;
              font-size: 16px;
              color: #333333;
              letter-spacing: 0;
            }
          }
          .item-right {
            display: flex;
            line-height: 31px;
            .year {
              margin-right: 10px;
              font-size: 14px;
              color: #AAAAAA;
              letter-spacing: 0
            }
            .time {
              @extend .year;
            }
          }
        }
      }
    }
   .circle-btn {
     bottom: 60px;
     right: 30px;
     background: #52A9FF;
     .iconadd_listx {
       color: white;
     }
   }
  }
</style>