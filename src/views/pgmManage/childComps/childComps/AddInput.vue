<template>
  <div class="add-input">
    <div class="input-item" v-for="(item,index) in msg" :key="index">
      <div class="item-top">
        <div class="icon"><i :class="item.icon"></i></div>
        <div class="text">{{item.title}}</div>
      </div>
      <div class="item-bottom">
        <input type="text" :placeholder="item.value" v-model="item.backData">
      </div>
    </div>
    <div class="btn">
      <div class="cancle" @click="cancle">取消</div>
      <div class="confirm" @click="crm">确定</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddInput",
    data() {
      return {
        msg: [{
          icon: 'iconfont iconrankx',
          title: '节目编号',
          value: '006',
          backData:'',
        }, {
          icon: 'iconfont iconprogramx',
          title: '节目名称',
          value: '请输入节目名称',
          backData:'',
        }, {
          icon: 'iconfont iconpeople_x',
          title: '表演人员',
          value: '请输入节目表演人员',
          backData:'',
        }],
        // inputData: [],
      }
    },
    methods :{
      cancle(){
        this.$emit('hideAddPgm');
      },
      crm(){

      }
    },
    computed :{

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .add-input {
    width: 100%;
    margin-top: 20%;
  .input-item {
    border-bottom: 1px solid #CCCCCC;

    .item-top {
      margin-top: 20px;
      display: flex;

      .icon {
        font-size: 16px;
      }

      .text {
        font-size: 16px;
        color: #666666;
        letter-spacing: 0;
        text-align: center;
        margin-left: 10px;
      }
    }

    .item-bottom {
      padding: 10px 0px;


      input {
        border: 0px;
        background-color: rgb(245,245,245);
      }
    }
  }

    .btn {
      display: flex;
      justify-content: space-between;
      margin-top: 16%;
       .cancle,.confirm {

         padding: 15px 70px;
         border-radius: 20px;


         text-align: center;
       }
      .cancle {
     background-color: white;
      }
      .confirm {
        background: #52A9FF;
      }
    }
  }
</style>