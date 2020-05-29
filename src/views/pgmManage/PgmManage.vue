<template>
  <div id="pgm-manage-container">
    <!--导航栏-->

    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center" @click="toDemo">{{$route.meta.title}}</div>
    </nav-bar>
    <!--节目列表-->
    <scroll class="content" ref="scroll" v-show="pgmListIsShow">
      <pgm-title>
        <div class="pgm-title" slot="title">节目列表</div>
        <div class="pgm-add" slot="icon" v-show="pgmListIsShow" @click="showAddPgm">
          <i class="iconfont iconadd_listx"></i>
        </div>
        <div slot="copms">
          <pgm-item :msg="msg" @imgLoad="imgLoad"></pgm-item>
        </div>
      </pgm-title>
    </scroll>
    <!--添加节目-->
    <scroll class="content" ref="scroll" v-show="addPgmIsShow">
      <add-pgm @hideAddPgm="hideAddPgm"></add-pgm>
    </scroll>

    <div class="background-lay"></div>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import CircleBtn from "components/common/circleBtn/CircleBtn";
  import Scroll from "components/common/scroll/Scroll";


  import PgmItem from "./childComps/PgmItem";
  import AddPgm from "./childComps/AddPgm";
  import {debounce} from "../../common/untils";

  import PgmTitle from "./childComps/PgmTitle";


  export default {
    name: "PgmManage",
    data() {
      return {
        msg: [],
        pgmListIsShow: true,
        addPgmIsShow: false,
      }
    },
    components: {
      NavBar,
      CircleBtn,
      Scroll,

      PgmItem,
      AddPgm,

      PgmTitle,
    },
    methods: {
      toDemo() {
        this.$router.push('/demo');
      },
      imgLoad() {
        debounce(this.$refs.scroll.refresh, 1000);
      },
      //显示节目添加页面
      showAddPgm() {
        this.pgmListIsShow = false;
        this.addPgmIsShow = true;
      },
      //隐藏节目添加页面
      hideAddPgm() {
        this.pgmListIsShow = true;
        this.addPgmIsShow = false;
      }
    },
    created() {
      this.$http.get('/getPgmList').then(res => {
        this.msg = res.data.pgmList;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  #pgm-manage-container {


    .background-lay {
      z-index: -1;
      height: 100vh;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
     background-color: rgb(245,245,245);
      position: fixed;
    }

    .content {
   @include scroll-content
    }
  }


</style>