<template>
  <div class="circle-btn">
    <div class="inside-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CircleBtn"
  }
</script>

<style lang="scss" scoped>
 .circle-btn{
   width: 64px;
   height: 64px;
   border-radius: 100%;
   position: fixed;
   box-shadow: 2px 2px 32px 0 rgba(0,0,0,0.26);
   display: flex;
   justify-content: center;
   background-color: #ffff;
  .inside-container{
    margin: auto;
  }
 }
</style>