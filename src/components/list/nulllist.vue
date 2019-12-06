<template>
  <div class="order">
    <Header msg="我的订单">
      <img src="./imgs/back.png" alt="" slot="left">
    </Header>
    <div class="main">
      <img src="./imgs/1.png" alt="">
    </div>
    <tabbar url1="./static/imgs/home.png" url2="./static/imgs/shopping.png" url3="./static/imgs/xu-list.png"
            url4="./static/imgs/mine.png" a3=1></tabbar>
  </div>
</template>
<script>
  import Header from './../../components/submint/header'
  import tabbar from './../../components/tabBar/tabbar'
  export default {
    components:{
      Header,
      tabbar
    },
    data:function () {
      return{
        arr:[],
        data:[
          {
            title:'Misu Castle甜品店',
            pic:'./static/imgs/img1.png',
            id:1234567,
            date:'2015-6-19',
            state:'已完成',
            sum:200,
            goods:[
              {
                goods:'./static/imgs/cake01.png',
                goodsTitle:'休闲农场三明治夹心蛋糕',
                goodsTaste:'花生味',
                goodsPrice:69,
                goodsNum:1

              }
            ]
          }
        ]
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
    overflow: hidden;
    height: 100vh;
    background-color: #fff;
  }
  .main{
    width: 100%;
    text-align: center;
  }
 .main img{
   width: 80%;
   margin-top: .7rem;
 }
</style>
