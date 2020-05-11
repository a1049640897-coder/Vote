<template>
  <div id="pgm-manage-container">
    <!--导航栏-->
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">节目管理</div>
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
      imgLoad() {
        debounce(this.$refs.scroll.refresh, 1000);
      },
      //显示节目添加页面
      showAddPgm() {
        this.pgmListIsShow = false;
        this.addPgmIsShow = true;
      },
      hideAddPgm(){
        this.pgmListIsShow = true;
        this.addPgmIsShow = false;
      }
    },
    created() {
      console.log(this.$http.get('/getPgmList').then(res => {
        this.msg = res.data.pgmList;
      }))
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  #pgm-manage-container {
    .content {
      @include scroll-content;
    }
  }


</style>