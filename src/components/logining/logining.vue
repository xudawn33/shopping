<template>
  <div>
    <div class="header">
      <div class="title">
        <h3>我的</h3>
        <p @click="register">注册</p>
      </div>
    </div>
    <div class="o"></div>
    <div class="top1">
      <img src="./piv.png" alt="">
      <p>您还没有登录</p>
      <button @click="login">点击登录</button>
    </div>
    <div class="my-list">
      <div class="top">
        <div class="one">
          <img src="./imgs/组4@2x.png" alt="">
          <p>我的订单</p>
          <p class="more" @click="list">查看更多></p>
        </div>
        <ul>
          <li>
            <img src="./imgs/组6@2x.png" alt="">
            <p>待付款</p>
          </li>
          <li>
            <img src="./imgs/Deliveryvan@2x.png" alt="">
            <p>待发货</p>
          </li>
          <li>
            <img src="./imgs/Shoppingbasket@2x.png" alt="">
            <p>待评价</p>
          </li>
          <li>
            <img src="./imgs/Open3Dbox@2x.png" alt="">
            <p>已完成</p>
          </li>
        </ul>
      </div>
      <div class="item">
        <img src="./imgs/组5@2x.png" alt="">
        <p>邀请好友</p>
        <p class="more">></p>
      </div>
      <div class="item">
        <img src="./imgs/组8@2x.png" alt="">
        <p>收货地址</p>
        <p class="more">></p>
      </div>
      <div class="item">
        <img src="./imgs/组5@2x.png" alt="">
        <p>我的店铺</p>
        <p class="more">></p>
      </div>
      <div class="item">
        <img src="./imgs/组8@2x.png" alt="">
        <p>商品评论</p>
        <p class="more">></p>
      </div>
    </div>
    <tabbar url1="./static/imgs/home.png" url2="./static/imgs/shopping.png" url3="./static/imgs/list.png"
            url4="./static/imgs/xu-mine.png" a4=1></tabbar>
  </div>
</template>
<script>
  import tabbar from './../../components/tabBar/tabbar'
  export  default {
    components:{
      tabbar
    },
    methods:{
      list:function () {
        this.$router.push('order')
      },
      login:function () {
        this.$router.push('login');
      },
      register:function () {
        this.$router.push('join');
      }
    }

  }
</script>
<style scoped>
  ul {
    list-style: none;
  }
  .header{
    width: 100%;
    background-color: rgb(170,40,26);
    height: .6rem;
    color: white;
    position: fixed;
    left:0;
    top:0;
  }
  .o {
    width: 100%;
    height: .6rem;
  }
  .header .title{
    height: .6rem;
    width: 98%;
    line-height: .6rem;
    text-align: center;
    position: relative;
  }
  .header .title h3{
    font-weight: 500;
    font-size: .2rem;
  }
  .header .title>p{
    position: absolute;
    z-index: 1;
    right: .1rem;
    top: 0;
    font-size: .14rem;
  }
  .top1 {
    width: 98%;
    margin: .1rem auto .05rem auto;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: .1rem;

  }
  .top1 img {
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    margin: .1rem .2rem .1rem .1rem;
  }
  .top1 button {
    width: 1rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    color: white;
    background-color: rgb(170,40,26);
    border-radius: .1rem;
    outline: none;
    border: none;
    margin-left: .3rem;
  }
  .one {
    width: 98%;
    margin: .05rem auto;
     }
  .footer {
    width: 100%;
    height: .6rem;
    background-color: #ccc;
    position: fixed;
    bottom:0;
    left: 0;
  }

  .my-list{
    margin-top: .1rem;
  }
  .my-list>div,.my-list>ul{
    background-color: #ffffff;
  }
  .my-list .top{
    width: 98%;
    margin: 0 auto;
    border-radius: .1rem;
  }
  .my-list .one,.my-list .item {
    width: 98%;
    display: flex;
    align-items: center;
    padding: .1rem 0;
    border-bottom: 1px solid #cccccc;
    font-size: .2rem;
    margin: 0 auto;
    border-radius: .1rem;
  }
  .my-list .one img,.my-list .item img{
    height: .3rem;
    margin-left: .2rem;
  }
  .my-list .one p:nth-of-type(1),.my-list .item p:nth-of-type(1){
    flex: 1;
    margin-left: .15rem;
  }
  .my-list .one p:nth-of-type(2),.my-list .item p:nth-of-type(2){
    text-align: right;
    flex: 2;
    margin-right: .1rem;
    font-size: .15rem;
  }
  .my-list .top ul{
    display: flex;
    padding: .1rem 0;
  }
  .my-list .top ul li{
    text-align: center;
    width: 25%;
    color: rgb(153,153,153);
  }
  .my-list .top ul li img{
    width: .3rem;
    height: .3rem;
  }
  .my-list .top ul li:nth-of-type(2) img{
    width: .5rem;
  }
  .my-list .item{
    margin-top: .1rem;
    background-color: #ffffff;
    border: none;
  }
  .my-list .item p:nth-of-type(2){
    font-size: .3rem;
    color: #cccccc;
  }
  .my-list{
    padding-bottom: .8rem;
  }
</style>
