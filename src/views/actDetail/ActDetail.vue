<template>
  <div id="act-detail-container">
    <!--导航栏-->
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">活动详情</div>
    </nav-bar>
  <scroll ref="scroll" class="content">
    <detail-img :img="img" @imgLoad="imgLoad"></detail-img>
    <detail-cont :list="cntList" :title="title"></detail-cont>
  </scroll>
  </div>
</template>

<script>
  //引入公共组件
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  //引入子组件
  import DetailImg from "./childComps/DetailImg";
  import DetailCont from "./childComps/DetailCont";


  export default {
    name: "ActDetail",
    data() {
      return {
        img: {},
        cntList: [],
        title: {},
      }
    },
    components: {
      NavBar,
      Scroll,

      DetailImg,
      DetailCont
    },
    methods: {
      //图片加载完成，进行scroll组件额refresh
      imgLoad() {
        this.$refs.scroll.refresh;
      }
    },
    created() {
      //获取活动详情内容
      this.$http.get('/getActDetail').then(res => {
        this.img = res.data.pic;
        this.cntList = res.data.detailList;
        this.title = res.data.title;
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";

  #act-detail-container {
    .content {
  @include scroll-content
    }
  }
</style>