<template>
  <div class="content">
    <div class="banner">
      <img  :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+truearr.gpicpath" width="100%">
      <div class="back">
        <img src="./imgs/commodity-details-return@2x.png" @click="back">
      </div>
    </div>
    <!--种类-->
    <div class="msg">
      <div class="price">
        <div class="one">
          <h2>{{truearr.gname}}</h2>
          <img src="./imgs/fenxiang=icon@2x.png">
        </div>
        <div class="two">
          <p>★★★★★</p><span>月销15单</span>
        </div>
        <div class="three">
          <p>￥<span>{{truearr.gprice}}</span></p>
          <div class='ar'>
            <span class="reduce">-</span>
            <p class="num">1</p>
            <span class="add">+</span>
          </div>
        </div>
      </div>
    </div>
    <!--商品信息-->
    <div class="shop-msg">
      <h3>商品介绍</h3>
      <p>{{truearr.gdescribe}}</p>
    </div>
    <!--用户评价-->
    <div class="shop-msg">
      <h3>用户评价</h3>
      <ul>
        <li>蛋糕很好吃，曲奇很好吃！好吃！</li>
        <li>蛋糕很好吃，曲奇很好吃！好吃！</li>
        <li>蛋糕很好吃，曲奇很好吃！好吃！</li>
      </ul>
    </div>
    <!--图片展示-->
    <div class="show-img">
      <img src="./imgs/img-list.jpg" alt="">
    </div>
    <!--底部-->
    <div class="footer-tabbar">
      <div class="left">
      <div class="item" @click="shop">
        <img src="./imgs/tool-icon-1@2x.png" alt="">
        <p>店铺</p>
      </div>
      <div class="item">
        <img src="./imgs/tool-icon-2@2x.png" alt="">
        <p>客服</p>
      </div>
      <div class="item">
        <img src="./imgs/tool-icon-3@2x.png" alt="">
        <p>收藏</p>
      </div>
    </div>
      <div class="right">
        <p @click="submitForm($event)">加入购物车</p>
        <p @click="buy">立即购买</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:function () {
    return{
      arr:'',
      gid:'',
      truearr:''
    }
  },
  mounted:function () {
    this.gid=this.$store.state.gid;
    this.arr=this.$store.state.all;
    for(var i=0;i<this.arr.length;i++){
      if(this.gid===this.arr[i].gid){
        this.truearr=this.arr[i]
      }
    }
    // console.log(this.truearr);
  },
  methods:{
    back:function () {
      this.$router.push('home');
    },
    buy:function () {
      this.$router.push('submit');
    },
    shop:function () {
      this.$router.push('baby')
    },
    submitForm(event) {
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/orderform?str=addOrder',{
        params:{
          goodsnum:1,
          payment:this.truearr.gprice,
          gid:this.gid,
          uid:this.$store.state.user.uid,
        }
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err)
        alert('请先登录');
        return false;
      });

      that.$router.push('shopping')
    },
  }
}
</script>
<style scoped>
  .content{
    padding-bottom: .6rem;
  }
  /*底部*/
.footer-tabbar{
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .6rem;
  border-top: 1px solid #cccccc;
  background-color: #ffffff;
}
  .footer-tabbar .left{
    width: 40%;
    display: flex;
    margin-top: .03rem;
  }
.footer-tabbar .left .item{
  flex: 1;
  text-align: center;
}
.footer-tabbar .left img{
  height: .35rem;
  vertical-align: top;
}
  .footer-tabbar .right{
    width: 60%;
    display: flex;
    border: 1px solid #AA281A;
    box-sizing: border-box;
  }
.footer-tabbar .right p{
  flex: 1;
  text-align: center;
  line-height: .6rem;
  font-size: .18rem;
}
.footer-tabbar .right p:nth-of-type(1){

}
.footer-tabbar .right p:nth-of-type(2){
    background-color: #AA281A;
  color: #ffffff;
}
  /*banner图*/
  .banner{
    position: relative;
  }
  .banner>img{
    width: 100%;
    height:3.5rem;
  }
  .banner .back{
    position: absolute;
    top: .1rem;
    left: .1rem;
    z-index: 3;
  }
  .banner .back img{
    height: .4rem;
  }
  .msg{
    padding: 0 .15rem;
    margin-top: -.2rem;
  }
  .msg .price{
    border-bottom: 1px solid #ccc;
    padding-bottom: .1rem;
  }
  .msg .price .one{
    display: flex;
    margin-top: .4rem;
  }
  .msg .price .one h2{
    font-weight: 500;
    flex: 1;
  }
  .msg .price .one img{
    height: .35rem;
  }
  .msg .price .two{
    display: flex;
    align-items: center;
  }
  .msg .price .two>p{
    color:rgb(245,165,32);
    font-size: .25rem;
  }
  .msg .price .two>span{
    color: rgb(129,129,129);
    line-height: .24rem;
    margin-left: .15rem;
    margin-top: .05rem;
  }
  .msg .price .three{
    display: flex;
  }
  .msg .price .three>p{
    color: #FF3E29;
    font-size: .13rem;
    flex: 1;
  }
  .msg .price .three>p>span{
    font-size: .2rem;
    font-weight: 900;
  }
  .msg .price .three .ar{
    display: flex;
  }
  .msg .price .three .ar>p{
    margin: 0 .1rem;
    line-height: .24rem;
  }
  .msg .price .three .ar>span{
    height: .25rem;
    width: .25rem;
    background-color: #AA281A;
    border-radius: 50%;
    color: #ffffff;
    font-size: .22rem;
    text-align: center;
    line-height: .24rem;
  }
  .shop-msg{
    border-bottom: 1px solid #cccccc;
  }
  .shop-msg h3{
    font-weight: 300;
    color: rgb(102,102,102);
    border-bottom: 1px solid #cccccc;
    padding: .2rem 0.15rem;
  }
  .shop-msg p{
  color: rgb(102,102,102);
    padding: .1rem 0.15rem;
  }
  .shop-msg ul{
    padding: 0 .15rem;
    color: rgb(102,102,102);
  }
  .shop-msg ul li{
    padding: .15rem 0;
    border-bottom: 1px solid #cccccc;
  }
  .shop-msg ul li:last-child{
    border: none;
  }
  .show-img{
    text-align: center;
  }
 .show-img img{
   width: 100%;
 }
</style>
