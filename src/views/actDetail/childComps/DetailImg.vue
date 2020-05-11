<template>
  <div class="detail-img-container">
    <div class="detail-img">
      <img v-lazy="img.activityPic" alt="" :key="img.activityPic" @load="imgLoad">
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailImg",
    props:{
     img:Object,
      default(){
       return {}
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
  .detail-img-container {
   padding: 0px;
    margin: 0px;
   .detail-img {
     img {
       width: 100%;
      height: 100%;
     }
   }
  }
</style>