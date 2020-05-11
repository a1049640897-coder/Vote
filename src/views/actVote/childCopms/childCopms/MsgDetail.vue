<template>
  <div class="msg-detail-container" @click="toActDetail">
    <div class="msg-detail">活动详情</div>
  </div>
</template>

<script>
  export default {
    name: "MsgDetail",
    methods: {
      toActDetail() {
        this.$router.push('/actDetail');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .msg-detail-container {
    position: absolute;
    padding: 10px 20px;
    background-color: #52A9FF;
    color: white;
    font-size: 12px;
    border-radius: 15px 0px 0px 15px;
    top: 25px;
    right: 0px;
    box-shadow: 3px 2px 23px 0 rgba(0, 0, 0, 0.25);
  }

</style>