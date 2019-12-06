<template>
  <div class="order">
    <Header msg="我的订单">
      <img src="./imgs/back.png" alt="" slot="left">
    </Header>
    <div class="msg" v-for="(item,index) in arr">
      <div class="top">
        <img :src="'http://47.94.145.204:8080/SuperMarket1.0/shopupload/'+item.goods.shops.slogo" width="100%">
        <p>{{item.goods.shops.sname}}</p>
      </div>
      <div class="session">
        <p>单号：127391723</p>
        <p>订单日期：2018-9-18</p>
      </div>
      <div class="item">
        <div class="left"><img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.goods.gpicpath"></div>
        <div class="right">
          <h3>{{item.goods.gname}}</h3>
          <p class="tasty">描述：{{item.goods.gdescribe}}</p>
          <div class="pric">
            <p><span>￥</span><strong>{{item.goods.gprice}}</strong></p>
            <p>×{{item.goodsnum}}</p>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="one">
          <div class="first">
            <p>订单状态：</p>
            <p>已支付</p>
          </div>
          <div class="second">
            <p>实付款：</p>
            <p>￥<strong>{{item.payment}}</strong></p>
          </div>
        </div>
        <div class="two">
          <button>评价</button>
        </div>
      </div>
      </div>
    <tabbar url1="./static/imgs/home.png" url2="./static/imgs/shopping.png" url3="./static/imgs/xu-list.png"
            url4="./static/imgs/mine.png" a3=1></tabbar>
  </div>
</template>
<script>
  import Header from './header'
  import tabbar from './../../components/tabBar/tabbar'
  export default {
    components:{
      Header,
      tabbar
    },
    data:function () {
      return{
        arr:[],
      }
    },
    mounted:function () {
      var that=this;
        this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/orderform?str=showOrder',{
          params:{
          uid:this.$store.state.user.uid,
            ostatus:1
          }
        }).then(function (res) {
          that.arr=res.data;
          console.log(that.arr);
        }).catch(function (err) {
        });
    },
  }
</script>
<style scoped>
  h3{
    color: #474747;
    font-weight: 300;
  }
  .order {
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
.msg {
  width: 98%;
  margin: .1rem auto;
  background-color: #fff;
  border-bottom: .01rem solid #ccc;
  padding-bottom: .1rem;
}
.msg .top {
  width: 100%;
  height: .6rem;
  background-color: #fff;
  margin-bottom: .05rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  }
.msg .top img {
  width: .4rem;
  height: .4rem;
  margin: .1rem;
}
.msg .top p {
  font-size: .14rem;
  color: rgb(51,51,51);
}
.msg .session {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.msg .session p {
  margin-left: .1rem;
}
.msg .session p:nth-of-type(2) {
  margin-right: .1rem;
}
.msg  .item {
  width: 90%;
  position: relative;
  margin: .1rem .08rem;
  display: flex;
  justify-content: flex-start;
}
.msg  .item .left {
  width: 35%;
}
.msg  .item .left img {
  width: 100%;
  border-radius: .06rem;
}
.msg .item .right {
  width:65%;
  margin-left: .1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.msg .item .right .pric {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.msg .item .right .pric p {
  color:rgb(256,62,41);
  font-size: .14rem;
}
.msg .item .right .pric p:nth-of-type(1) strong {
  font-size: .2rem;
}
.msg .bottom {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.msg .bottom .one {
  width: 50%;
  margin-left: .1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.msg .bottom .two {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}
.msg .bottom .one .first,.msg .bottom .one .second {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.msg .bottom .one .first p,.msg .bottom .one .second p {
  font-size:.16rem ;
  color: rgb(51,51,51);
}
.msg .bottom .one .second p:nth-of-type(2) {
  color:rgb(256,62,41);
}
.msg .bottom .one .second p:nth-of-type(2) strong {
  font-size: .2rem;
}
.msg .bottom .two button {
  border:none;
  outline: none;
  width: .8rem;
  height: .3rem;
  background-color: rgb(170,40,26);
  border-radius: .06rem;
  color: white;
  font-size: .15rem;
  text-align: center;
  line-height: .3rem;

}
</style>
