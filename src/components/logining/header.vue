<template>
  <div  >
    <div class="header" id="header">
      <h1>{{msg}}</h1>
      <span class="left"><slot name="left"></slot></span>
    </div>
    <div class="btt"></div>
  </div>

</template>
<script>

  export default {
    props:['msg','leftUrl']

  }
</script>
<style scoped>
  #header {
    position: fixed;
    top:0;
    left:0;
    z-index: 99;
  }
  .btt  {
    width: 100%;
    height: .6rem;
  }
  .header {
    width: 100%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    border-bottom: .01rem solid #858585;
    position: relative;
    background-color: rgb(170,40,26);
  }
  .header h1 {
    font-size: .25rem;
    color:#fff;
    font-family: "PingFang SC Medium";
  }
  .left img {
    height: .3rem;
    float:left;
    position: absolute;
    top:.15rem;

  }
  .left img{
    left:.2rem;
  }
</style>
