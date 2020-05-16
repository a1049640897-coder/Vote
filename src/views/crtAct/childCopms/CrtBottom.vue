<template>
  <div class="crt-bottom-container">
    <div class="crt-bottom">
      <div :class="[isActived?actived:pre]" @click="back" v-show="$store.state.actCntIsShow">上一步</div>
      <div :class="[isActived?actived:pre]" v-show="!$store.state.actCntIsShow" @click="previous">上一步</div>
      <div :class="[!isActived?actived:nxt]" @click="next" v-show="!$store.state.actSetIsShow">下一步</div>
      <div :class="[!isActived?actived:nxt]" @click="finish" v-show="$store.state.actSetIsShow">完成</div>
    </div>
  </div>
</template>

<script>
  import * as mutationTypes from "store/mutation-types";

  export default {
    name: "CrtBottom",
    data() {
      return {
        isActived: true,
        actived: 'actived',
        pre:'previous',
        nxt:'next'
      }
    },
    methods: {
      //上一步
      previous() {
        this.isActived =true;
        this.$store.dispatch(mutationTypes.CHANGE_ACT_CNT_SHOW, true);
        this.$store.dispatch(mutationTypes.CHANGE_ACT_SET_SHOW, false);
      },
      //下一步
      next() {
        this.isActived =false;
        this.$store.dispatch(mutationTypes.CHANGE_ACT_CNT_SHOW, false);
        this.$store.dispatch(mutationTypes.CHANGE_ACT_SET_SHOW, true);
      },
      //完成
      finish() {
        this.$router.push({
          path: '/actList',
          query: {
            finishi: true,
          }
        })
      },
      //上一级
      back() {
        history.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .crt-bottom-container {
    padding: 15px;
    background-color: #FFFFFF;

    .crt-bottom {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      .previous {
        border: 1px solid #52A9FF;
        border-radius: 25px;
        padding: 15px 60px;
      }

      .next {
        @extend .previous;
      }

      .actived {
        @extend .previous;
        background: #52A9FF;
      }
    }

  }

</style>