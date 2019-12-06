<template>
<div class="container">
  <div class="header">
      <div class="mine-top">
        <div class="title">
          <h3>我的</h3>
          <p @click="login">退出</p>
        </div>
        <div class="user">
              <img src="./imgs/组4@2x.png" alt="">
              <h2></h2>
          <p class="qq">{{msg.uphone}}</p>
          <ul>
            <li>
              <h2>14</h2>
              <p>收藏夹</p>
            </li>
            <li>
              <h2>0</h2>
              <p>关注店铺</p>
            </li>
            <li>
              <h2>13</h2>
              <p>足迹</p>
            </li>
            <li>
              <h2>0</h2>
              <p>红包卡卷</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
  <div class="my-list">
   <div class="top">
     <div class="one">
       <img src="./imgs/组5@2x.png" alt="">
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
import tabbar from './../tabBar/tabbar'
  export  default {
  data:function () {
    return{
      arr:[],
      msg:'',
    }
  },
  components:{
    tabbar
  },
    mounted:function () {
      this.arr=this.$store.state.user;
      this.msg=this.arr;
      console.log(this.msg);
    },
    methods:{
    list:function () {
      this.$router.push('order')
    },
      login:function () {
        this.$router.push('login')
      }
    }
  }
</script>
<style scoped>
  .container{
    background-color: #F5F6F7;
  }
  .header{
    width: 100%;
    color: #ffffff;
    height: 3.2rem;
  }
.mine-top{
  width: 100%;
  background-color: #AA281A;
  height: 1.4rem;
}
  .mine-top .title{
    height: .6rem;
    width: 100%;
    line-height: .6rem;
    text-align: center;
    position: relative;
  }
  .mine-top .title h3{
    font-weight: 500;
    font-size: .2rem;
  }
  .mine-top .title>p{
    position: absolute;
    z-index: 1;
    right: .1rem;
    top: 0;
    font-size: .14rem;
  }
  .mine-top .user{
    position: absolute;
    background-color: #ffffff;
    width: 90%;
    left: 0.16rem;
    top: 1.2rem;
    height: 2rem;
    border-radius: .1rem;
    text-align: center;
  }
  .mine-top .user img{
    position: absolute;
    top: -.6rem;
    height: 1.2rem;
    left: 50%;
    margin-left: -.6rem;
  }
  .mine-top .user>h2{
    color: rgb(62,62,62);
    margin-top: .6rem;
    margin-bottom: .1rem;
    font-weight: 500;
  }
  .mine-top .user .qq{
    color:rgb(154,154,154);
  }
  .mine-top .user ul {
    margin-top: .1rem;
    display: flex;
  }
  .mine-top .user ul li{
    width: 25%;
    text-align: center;
  }
  .mine-top .user ul li h2{
    color: #FF0000;
  }
  .mine-top .user ul li p{
    color: rgb(102,102,102);
  }
  .my-list{
    margin-top: .2rem;
    padding: 0 .16rem;
  }
  .my-list>div,.my-list>ul{
    background-color: #ffffff;
  }
  .my-list .top{
    border-radius: .1rem;
  }
  .my-list .one,.my-list .item {
    width: 100%;
    display: flex;
    align-items: center;
    padding: .1rem 0;
    border-bottom: 1px solid #cccccc;
    font-size: .2rem;
  }
  .my-list .one img,.my-list .item img{
    height: .4rem;
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
    height: .35rem;
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
    font-size: .4rem;
    color: #cccccc;
  }
 .my-list{
   padding-bottom: .8rem;
 }
</style>
