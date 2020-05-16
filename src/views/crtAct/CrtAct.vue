<template>
  <div id="crt-act-container">
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">创建活动</div>
    </nav-bar>
    <scroll class="content">
      <div class="main">
        <!--头部-->
        <crt-top></crt-top>
        <!--主体-->
        <crt-cnt v-show="$store.state.actCntIsShow"></crt-cnt>
        <crt-set :type="type" v-show="$store.state.actSetIsShow"></crt-set>
        <!--底部-->
        <crt-bottom></crt-bottom>
      </div>
    </scroll>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import CrtTop from "./childCopms/CrtTop";
  import CrtCnt from "./childCopms/CrtCnt";
  import CrtSet from "./childCopms/CrtSet";
  import CrtBottom from "./childCopms/CrtBottom";

  export default {
    name: "CrtAct",
    data() {
      return {
        type: Boolean,
      }
    },
    components: {
      NavBar,
      Scroll,

      CrtTop,
      CrtCnt,
      CrtSet,
      CrtBottom
    },
    created() {
      //获取类型
      this.type = this.$route.query.type;
    },
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  #crt-act-container {
    .content {
      @include scroll-content;
    }

    .main {
      background-color: #CCCCCC;

      .nav-bar {
        background-color: #CCCCCC;
      }
    }
  }


</style>