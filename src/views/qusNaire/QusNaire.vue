<template>
  <div id="qus-naire-container">
    <div class="qus-naire">
      <div class="title">{{$route.meta.title}}</div>
      <div class="input">
        <div class="username">
          <van-field
            v-model="value1"
            left-icon="manager-o"
            placeholder="请输入用户名"
            class="user"
          />
        </div>
        <div class="passwd">
          <van-field
            v-model="value1"
            left-icon="smile-o"
            placeholder="请输入密码"
            class="pas"
          />
        </div>
      </div>
      <div class="btn">
        <van-button type="primary" size="large" class="login" @click="toQusList">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Field,Button} from 'vant';
  import * as mutationsTypes from "store/mutation-types";
  export default {
    name: "QusNaire",
    data() {
      return {
        value1: '',
        value2: '',
      }
    },
    components: {
      [Field.name]:Field,
      [Button.name]:Button,
    },
    methods: {
      toQusList() {
        this.$store.dispatch(mutationsTypes.CHANGE_USER_IS_SHOW,true);
        this.$router.push('/qusList');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #qus-naire-container {
    background-image: url("~assets/img/common/qusNaire.png");
    background-repeat: no-repeat;
    object-fit: cover;
    margin: auto;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: visible;
    width: 100%;
    height: 100%;


    .qus-naire {
      width: 80%;
      margin-left: 10%;
      margin-top: 50%;
      .title {
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 30px;
      }

      .user, .pas {
        background: rgba(180, 180, 180, 0.66);
        border-radius: 5px;
        margin-bottom: 15px;
        height: 50px;
        color: #FFFFFF;
        font-size: 16px;

        ::-webkit-input-placeholder {
          opacity: 0.65;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;

        }

        :-moz-placeholder { /* Firefox 18- */
          opacity: 0.65;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;

        }

        ::-moz-placeholder { /* Firefox 19+ */
          opacity: 0.65;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;

        }

        :-ms-input-placeholder {
          opacity: 0.65;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;

        }

      }

      .btn {
        .login {
          height: 60px;
          border-radius: 5px;
          background: #52A9FF;
          border: 0px;
        }
      }
    }
  }
</style>