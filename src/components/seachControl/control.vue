<template>
  <div>
    <div class="header" id="header">
      <img :src="url1" alt="">
      <img src="./imgs/search-icon-1@2x.png" alt="" class="left">
      <input type="text" placeholder="搜索商品">
      <img src="./imgs/search-icon-2@2x.png" alt="" class="right">
      <img :src="url2" alt="">
    </div>
    <div class="c">
    </div>
  </div>
</template>
<script>
  export default  {
    props:['url1','url2']
  }
</script>
<style scoped>
  #header {
    position: fixed;
    top:0;
    left:0;
    z-index: 99;
  }
  .header {
    width: 100%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(170,40,26);
  }
  .c {
    width: 100%;
    height: .6rem;
  }
  .header input {
    margin-left: .1rem;
    width: 80%;
    height: .4rem;
    border: none;
    outline: none;
    border-radius: .08rem;
    text-indent: .35rem;
    font-size: .15rem;
    display: flex;
    justify-content: space-between;
  }
  .header img:nth-of-type(1),.header img:nth-of-type(4) {
    width: .2rem;
    height: .2rem;
    margin-left: .1rem;
  }
  .header img:nth-of-type(2),.header img:nth-of-type(3) {
    width: .35rem;
    height: .35rem;
  }
  .header img:nth-of-type(2),.header img:nth-of-type(3){
    position: absolute;
    top:.13rem;
  }
  .header img:nth-of-type(2) {
    left: .45rem;
  }
  .header img:nth-of-type(3) {
    right: .4rem;
  }
  /*.header img {*/
    /*height: .4rem;*/
    /*margin-right: .05rem;*/
  /*}*/
</style>
