<template>
  <div class="add-pgm-container">
    <pgm-title>
      <div class="pgm-title" slot="title">添加节目</div>
      <div class="pgm-main" slot="container">
        <div class="avatar-box">
          <img :src="img" alt="" v-show="" v-show="!imgIsShow">
          <img src="~assets/img/common/loading.gif" alt="" v-show="imgIsShow">
          <div class="camera-box">
            <div class="camera">
              <van-uploader :after-read="afterRead">
                <i class="iconfont iconcamera"></i>
              </van-uploader>
            </div>
          </div>
        </div>
        <add-input @hideAddPgm="hideAddPgm"></add-input>
      </div>

    </pgm-title>
  </div>
</template>

<script>
  import PgmTitle from "./PgmTitle";
  import AddInput from "./childComps/AddInput";
  import Scroll from "components/common/scroll/Scroll";

  import {Uploader} from 'vant';


  export default {
    name: "AddPgm",
    data() {
      return {
        img: null,
        imgIsShow: true,
      }
    },
    components: {
      PgmTitle,
      AddInput,
      Scroll,

      [Uploader.name]:Uploader,
    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        this.img = file.content;
        this.imgIsShow = false;
      },
      hideAddPgm() {
        this.$emit('hideAddPgm');
      }
    },
    computed: {}
  }
</script>

<style lang="scss" scoped>
  .add-pgm-container {
    .pgm-main {
      width: 100%;
      padding: 20px 0px;

      .avatar-box {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 100%;
        z-index: 9;
        margin-top: 30px;

        img {
          width: 120px;
          height: 120px;
          border-radius: 100%;
        }

        .camera-box {
          display: flex;
          justify-content: center;
          position: absolute;
          background-color: #52A9FF;
          bottom: 0Px;
          right: 10Px;
          width: 40px;
          height: 40px;
          border-radius: 100%;

          .camera {
            margin: auto;
          }
        }
      }
    }
  }

</style>