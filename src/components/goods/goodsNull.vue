<template>
  <div class="box">
    <Header msg="我的购物车">
      <img src="./imgs/back.png" alt="" slot="left" @click="back">
    </Header>
    <div class="top">
      <img src="./imgs/gouwuche-img-1@2x.png" alt="">
      <p>购物车空空，赶快去逛逛吧</p>
    </div>
    <div class="seccion">
      <img src="./imgs/icon.png" alt="">
      <p>猜你喜欢</p>
    </div>
    <div class="bottom">
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="./imgs/img-1@2x.png" alt="">
        </div>
        <div class="right">
          <h3>葡式蛋挞</h3>
          <p class="p">欧意葡式蛋挞带锡底纸托肯德基半成品牛油蛋挞···</p>
          <div class="bom">
            <p><span>￥</span>13 <span>.8</span></p>
            <p>1007人付款</p>
            <img src="./imgs/gouwuche-icon@2x.png" alt="">
          </div>

        </div>
      </div>
    </div>
    <tabbar url1="./static/imgs/home.png" url2="./static/imgs/xu-shopping.png" url3="./static/imgs/list.png"
            url4="./static/imgs/mine.png" a2=1></tabbar>
  </div>
</template>
<script>
  import  Header from './header'
  import tabbar from './../../components/tabBar/tabbar'
  export  default {
    components:{
      Header,
      tabbar
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  h3{
    font-weight: 300;
    color: #474747;
  }
  .box {
    width: 100%;
  }
  .top {
    width: 100%;
    text-align: center;
    background-color: #fff;
  }
  .top img {
    width: 30%;
    margin-top: .3rem;
  }
  .top p {
    font-size: .2rem;
    color: rgb(89,89,89);
    padding: .3rem 0;
  }
  .seccion {
    width: 100%;
    height: .6rem;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .seccion p {
    font-size: .2rem;
    color: rgb(64,64,64);
    margin-left: .1rem;
  }
  .bottom {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .bottom .item {
    width: 95%;
    display: flex;
    justify-content: flex-start;
    margin: .1rem  auto .1rem auto;
  }
  .bottom .item .left {
    width: 25%;
    overflow: hidden;
    border: .01rem solid #fd7902;
  }
  .bottom .item .left img {
    width: 100%;
    height: 100%;
  }
  .bottom .item .right {
    width: 70%;
    margin-left: .1rem;
  }
  .bottom .item .right h3 {
    font-size: .15rem;
    color:rgb(27,27,27);
  }
  .bottom .item .right .p {
    font-size: .14rem;
    color:rgb(148,148,148);
    margin-top: .02rem;
  }
  .bottom .item .right .bom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:rgb(148,148,148);
    font-size: .14rem;
  }
  .bottom .item .right .bom img {
    width: .2rem;
    height: .2rem;
  }
  .bottom .item .right .bom p:nth-of-type(1) span{
    color: #fd7902;
    font-size: .1rem;
  }
  .bottom .item:last-of-type {
    margin-bottom: .7rem;
  }
</style>
