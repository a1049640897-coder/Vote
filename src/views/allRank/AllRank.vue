<template>
  <!--最外层-->
  <div id="all-rank-container">
    <nav-bar>
      <div slot="left"><i class="iconfont iconfanhui"></i></div>
      <div slot="center">排行榜</div>
    </nav-bar>

    <div class="rank-title">
      <div :class="[singerShow ? active : static]" @click="singer">{{awardName.bestMaleSinger}}</div>
      <div :class="[popularShow ? active : static]" @click="popular">{{awardName.bestPopularityAward}}</div>
      <div :class="[beautifulShow ? active : static]" @click="beautiful">{{awardName.mostBeautiful}}</div>
    </div>
    <!--最佳人气-->
    <rnk-top :msg="popularTop" v-show="popularShow"></rnk-top>
    <rnk-bottom :btm="popularBottom" v-show="popularShow" @imgLoad="btmLoad"></rnk-bottom>
    <!--男歌手-->
    <rnk-top :msg="singerTop" v-show="singerShow"></rnk-top>
    <rnk-bottom :btm="popularBottom" v-show="singerShow" @imgLoad="btmLoad"></rnk-bottom>
    <!--台风-->
    <rnk-top :msg="beautifulTop" v-show="beautifulShow"></rnk-top>
    <rnk-bottom :btm="beautifulBottom" v-show="beautifulShow " @imgLoad="btmLoad"></rnk-bottom>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "components/common/scroll/Scroll";

  import RnkTop from "./childComps/RnkTop";
  import RnkBottom from "./childComps/RnkBottom";


  export default {
    name: "AllRank",
    components: {
      NavBar,
      Scroll,

      RnkTop,
      RnkBottom
    },
    data() {
      return {
        awardName: '',
        singerShow: false,
        popularShow: true,
        beautifulShow: false,
        static: 'static',
        active: 'active',

        popularTop: {},
        popularBottom: [],

        singerTop: {},
        singerBottom: [],

        beautifulTop: {},
        beautifulBottom: [],
      }
    },
    methods: {
      //点击最佳男歌手
      singer() {
        this.singerShow = true;
        this.popularShow = false;
        this.beautifulShow = false;

      },
      //点击最佳人气奖
      popular() {
        this.singerShow = false;
        this.popularShow = true;
        this.beautifulShow = false;
      },
      //点击最美台风奖
      beautiful() {
        this.singerShow = false;
        this.popularShow = false;
        this.beautifulShow = true;
      },
      //图片加载refresh
      btmLoad() {
        // this.$refs.scroll.refresh;

      }

    },
    mounted() {
      this.$http.get('/getAllRank').then(res => {

        this.awardName = res.data.awardName;
        //最佳人气奖头部数据
        this.popularTop = res.data.bestPopularityAward[0].rankTop;
        //最佳人气奖底部数据
        this.popularBottom = res.data.bestPopularityAward[0].rankBottom;
        //最佳男歌手头部数据
        this.singerTop = res.data.bestMaleSinger[0].rankTop;
        this.singerBottom = res.data.bestMaleSinger[0].rankBottom;
        //最美台风奖头部数据

        this.beautifulTop = res.data.mostBeautiful[0].rankTop;
        //最美台风奖底部数据
        this.beautifulBottom = res.data.mostBeautiful[0].rankBottom;
      })
    }
  }
</script>

<style lang="scss" scoped>
  .rank-title {
    display: flex;
    padding: 10px;
    background-color: rgb(245, 245, 245);

    .static {
      font-size: 16px;
      color: #999999;
      letter-spacing: 0;
      text-align: center;
      flex: 1;
      margin-top: 7px;
    }

    .active {
      font-size: 22px;
      letter-spacing: 0;
      text-align: center;
      flex: 1;
    }

    .content {
      position: absolute;
      top: 44px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      overflow: hidden;
    }
  }
</style>