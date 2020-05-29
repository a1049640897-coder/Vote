<template>
  <!--底部滑块-->
  <div class="pgm-btm">
    <van-swipe-cell class="swiper" v-for="(item,index) in msg" :key="index">
      <div class="avatar">
        <img v-lazy="item.avatar" alt="" @load="imgLoad">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="number">编号:0{{item.number}}</div>
        <div class="dancer">{{item.dancer}}</div>
      </div>
      <template #right>
        <div class="btn">
          <div class="blank"></div>
          <div class="edit">
            <i class="iconfont iconbianji"></i>
            编辑
          </div>
          <div class="sort" @click="sort(index)">
            <i class="iconfont iconrankx"></i>
            顺序
          </div>
          <div class="del" @click="del(index)">
            <i class="iconfont icondelete"></i>
            删除
          </div>
        </div>
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>

  import { SwipeCell } from 'vant';

  export default {
    name: "PgmItem",
    props: {
      msg: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      [SwipeCell.name]:SwipeCell,
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad');
      },
      //删除节目
      del(index) {
        let list = this.msg;
        list.splice(index, 1);
      },
      //改变节目顺序
      sort(index) {
        let list = this.msg;
        if (index !== 0) {
          let crtData = list[index];
          list.splice(index, 1, list[index - 1]);
          list.splice(index - 1, 1, crtData);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pgm-btm {
    position: relative;
    border-radius: 10px;

    .swiper {
      padding: 10px 0px;
      background-color: #FFFFFF;
      border-radius: 10px;
      margin-top: 10px;

      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        background-color: #52A9FF;
        float: left;

        img {
          width: 64px;
          height: 64px;
          border-radius: 100%;
        }
      }

      .text {
        float: left;
        margin-left: 10px;

        .title {
          font-size: 16px;
          font-weight: bold;
          color: #666666;
        }

        .number, .dancer {
          font-size: 14px;
          color: #999999;
          letter-spacing: 0;
          margin-top: 3px;
        }
      }

      .btn {
        margin-left: 40px;
        width: 240px;
        height: 30px;
        margin-top: -10px;

        .edit {
          background: #52A9FF;
          float: left;
          font-size: 14px;
          color: #FFFFFF;
          width: 80px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 16px 0px;
          border-radius: 10px 0px 0px 10px;

          .iconfont {
            font-size: 20px;
            margin-bottom: 10px;
          }
        }

        .sort {
          @extend .edit;
          background: #A2B777;
          border-radius: 0px;
        }

        .del {
          @extend .edit;
          background: #FF5B5B;
          border-radius: 0px 10px 10px 0px;
        }

      }
    }

  }
</style>