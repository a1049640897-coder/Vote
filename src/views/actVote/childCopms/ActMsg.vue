<template>
  <div class="act-msg">
    <div class="img">
      <img v-lazy="msg.activityPic" alt="" @load="imgLoad">
    </div>
    <div class="title">{{msg.activityTitle}}</div>
    <div class="count">
      <div class="competition">
        <div class="competition-cut">{{msg.participantCount}}</div>
        <div class="cut-1">参赛人数</div>
      </div>
      <div class="has-count">
        <div class="has-count-cut">{{msg.voteCount}}</div>
        <div class="cut-2">已投票数</div>
      </div>
      <div class="hot-count">
        <div class="hot-count-cut">{{msg.hotCount}}</div>
        <div class="cut-3">活动热度</div>
      </div>
    </div>
    <msg-detail></msg-detail>
  </div>
</template>

<script>
  import MsgDetail from "./childCopms/MsgDetail";

  export default {
    name: "ActMsg",
    components: {
      MsgDetail,
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
      imgLoad() {
        this.$emit('load');
      }
    },

  }
</script>

<style lang="scss" scoped>

  .act-msg {
    padding: 0px 10px 0px 10px;
    position: relative;
    background-color: rgb(245, 245, 245);

    .img img {
      width: 100%;
      height: 100%;
    }

    .title {

      font-weight: bold;
      font-size: 18px;
      color: #333333;

      margin: 20px 0px 20px 0px;
      text-align: center;
    }

    .count {
      display: flex;

      .competition, .has-count, .hot-count {
        flex: 1;
      }

      .competition-cut, .has-count-cut, .hot-count-cut {
        font-size: 20px;
        color: #D34545;
        letter-spacing: 0;
        text-align: center;
      }

      .cut-1, .cut-2, .cut-3 {
        font-size: 14px;
        color: #888888;
        letter-spacing: 0;
        text-align: center;
        margin: 5px 0px 5px 0px;
      }
    }
  }
</style>