<template>
  <div class="rnk-bottom-container">
     <div class="rnk-bottom" v-for="(item,index) in btm" :key="index">
       <div class="number">{{index}}</div>
       <div class="avatar">
         <img v-lazy="item.avatar" alt="" @load="imgLoad">
       </div>
       <div class="title">{{item.title}}</div>
       <div class="name">{{item.name}}</div>
       <div class="count">{{item.number}}票</div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "RnkBottom",
    props:{
      btm:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    methods :{
      imgLoad(){
        this.$emit('imgLoad');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/common";
 .rnk-bottom-container {
   position: relative;
   padding:10px 20px;
  .rnk-bottom {
    width: 100%;
    display: flex;
    justify-content:space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #CCCCCC;
   .title,.count, {
      line-height: 64px;
    }
    .avatar {
      @include img-style;
      margin-top: 5px;
      flex: 1;
    }
    .number {
      line-height: 64px;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
    }
    .avatar,.title,{
      margin-left: 10px;
    }
    .title {
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      flex: 1;

    }
    .name {
      line-height: 64px;
      flex: 1;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
      
    }
    .count{
      font-size: 14px;
      color: #52A9FF;
      letter-spacing: 0;
      float: right;
    }

  }
 }
</style>