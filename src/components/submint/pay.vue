<template>
  <div class="pay">
    <Header msg="支付">
      <img src="./imgs/back.png" alt="" slot="left">
    </Header>
    <p class="col" @click="complete">完成</p>
    <div class="top">
      <img src="./imgs/img-1@2x.png" alt="">
      <p>支付成功</p>
    </div>
    <div class="seesion">
      <h3>送货信息</h3>
      <p>我们将尽快安排发货，请买家保持手机通讯畅通，一遍快递哥哥能第一时间联系到您。</p>
      <div class="btn">
        <button @click="goOn">继续购物</button>
        <button @click="list">查看订单</button>
      </div>
      <div class="foot">
        <img src="./imgs/warn.png" alt="">
        <p>安全提醒：乐购不会以任何理由要求您提供银行卡信用信息或支付额外费用，请谨慎防钓鱼链接或诈骗电话。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from './header'
  export default {
    components:{
      Header
    },
    methods:{
      complete:function () {
        this.$router.push('mine')
      },
      goOn:function () {
        this.$router.push('home')
      },
      list:function () {
        this.$router.push('list')
      }
    }
  }
</script>
<style scoped>
 .pay {
   width: 100%;
   overflow: hidden;
   height: 100vh;
   background-color: #fff;
 }
 .col {
    font-size: .15rem;
    color:white;
    position: absolute;
    top:.2rem;
    right:.15rem;
    z-index:99;
  }
 .pay .top {
    width: 95%;
    text-align: center;
    border-bottom: .01rem solid #ccc;
    margin: 0 auto;
  }
 .pay .top img {
   width: 50%;
   margin: .2rem 1.2rem .1rem 1.2rem;
 }
 .pay .top p {
   font-size: .18rem;
   color: rgb(51,51,51);
   font-family: "PingFang SC Medium";
   padding-bottom: .1rem;
 }
 .pay .seesion {
   width: 95%;
   margin: .2rem auto .2rem auto;

 }
 .pay .seesion h3 {
   margin: .1rem;
   font-size: .16rem;
   color:rgb(51,51,51);
 }
 .pay .seesion p {
   margin-left: .1rem;
   font-size:.12rem;
   color: rgb(51,51,51);;
   font-family: "PingFang SC Medium";
   margin-bottom: .1rem;
 }
 .pay .seesion .btn {
   width: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top:.2rem;
 }
 .pay .seesion .btn button {
   width: 1rem;
   height: .4rem;
   color: white;
   font-size: .15rem;
   background-color: rgb(170,40,26);
   border:none;
   outline: none;
   border-radius: .06rem;
   font-family: "PingFang SC Medium";
 }
 .pay .seesion .btn button:nth-of-type(2) {
   background-color: #fff;
   border: .01rem solid #ccc;
   color: rgb(51,51,51);
 }
 .pay .foot {
   width: 100%;
   margin-top: .1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .pay .foot img {
   width: .25rem;
   height: .25rem;
 }
 .pay .foot p {
   margin-top: .1rem;
 }

</style>
