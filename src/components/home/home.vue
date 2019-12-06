
<template>
  <div>
    <div class="home">
      <div class="go-top" v-show="flag" @click="goTop">
        <img src="./img/xuanfu-icon@2x.png" alt="">
      </div>
      <div class="header">
        <div class="left">
          <img src="./img/search-icon-1@2x.png" alt=""><p>扫一扫</p>
        </div>
        <div class="middle">
          <input type="text" placeholder="寻找宝贝店铺" @focus="jumpSearch">
          <img src="./img/search-icon-2@2x.png" alt="">
        </div>
        <div class="right">
          <img src="./img/search-icon-3@2x.png" alt="">
          <p>消息</p>
        </div>
      </div>
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./img/ycy1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./img/ycy2.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="./img/ycyh3.jpg" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>
      </div>
      <div class="content">
        <div class="list">
          <div class="item">
            <p class="squel"><img src="./img/乐抢购@2x.png" alt=""></p>
            <p>乐抢购</p>
          </div>
          <div class="item">
            <p class="squel"><img src="./img/有好货@2x.png" alt=""></p>
            <p>有好货</p>
          </div>
          <div class="item">
            <p class="squel"><img src="./img/爱逛街@2x.png" alt=""></p>
            <p>爱逛街</p>
          </div>
          <div class="item">
            <p class="squel"><img src="./img/必买清单@2x.png" alt=""></p>
            <p>必买清单</p>
          </div>
        </div>
        <!--当前抢购-->
        <div class="now-sale">
          <div class="title">
            <img src="./img/now-sale.png" alt="">
            <h2>当前抢购</h2>
            <p class="more">更多>></p>
          </div>
          <div class="shopping-des">
            <div class="s-item" v-for="(item,index) in all">
              <img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.gpicpath" width="100%" @click="details(index)">
              <h3>{{item.gname}}</h3>
              <p>距结束&emsp;<span>01</span>时<span>23</span>分<span>58</span>秒</p>
              <div class="floating">
                  <p>抢购中</p>
                  <h3>{{item.gcount}}</h3>
                  <p>件已抢</p>
              </div>
            </div>
        </div>
        <!--商品推荐-->
        <div class="shop-tui">
          <div class="title">
            <img src="./img/now-sale.png" alt="">
            <h2>商品推荐</h2>
            <p class="more">更多>></p>
          </div>
          <div class="shopping-des">
            <div class="s-item" v-for="(item,index) in all">
              <img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.gpicpath" width="100%" @click="details(index)">
              <h3>{{item.gname}}</h3>
              <p class="tui-p"><span>￥<span class="price">{{item.gprice}}</span></span>&emsp;11人付款</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
    <tabbar url1="./static/imgs/xu-home.png" url2="./static/imgs/shopping.png" url3="./static/imgs/list.png"
            url4="./static/imgs/mine.png" a1=1></tabbar>
  </div>
</template>
<script>
  import tabbar from './../tabBar/tabbar'
  import Swiper from 'swiper'
  export default {
    data:function () {
      return{
        flag:false,
        scroll:0,
        all:''
      }
    },
    components:{
      tabbar
    },
    mounted:function () {
      window.addEventListener('scroll', this.menu);
      new Swiper ('.swiper-container', {
        speed:500,
        autoplay : {
          delay:2000
        },
        effect : 'flip',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
      // 请求数据
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/goods?str=likeGoods',{
        params:{
        }
      }).then(function (res) {
        that.all=that.$store.state.all=res.data;
        // console.log(that.all)
      }).catch(function (err) {
      })
    },
    methods:{
      jumpSearch:function () {
        this.$router.push('searchblur')
      },
      goTop:function () {
        document.documentElement.scrollTop=0
      },
      menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scroll===200){
          this.flag=true
        }else if(this.scroll<200){
          this.flag=false
        }
      },
      details:function (index) {
        this.$store.state.gid=this.all[index].gid;
        this.$store.state.smid=this.all[index].shops.smid;
        // console.log(this.$store.state.gid);
        console.log(this.$store.state.smid);
        this.$router.push('details');
      }
    }

  }
</script>
<style scoped>

.home{
  width: 100%;
  margin-bottom: .6rem;
  background-color: #ECE2D1;
}
.home .go-top{
  position: fixed;
  z-index: 99;
  background-color: #F4E3E1;
  border-radius: 50%;
  width: .6rem;
  height: .6rem;
  right: .2rem;
  bottom: .8rem;
}
.home .go-top img{
  width: .6rem;
}
  .header{
    height: .6rem;
    width: 100%;
    background-color: rgb(170,40,26);
    color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header .left{
    font-size: .11rem;
    text-align: center;
    margin-right: .1rem;
  }
.header .left img {
  height: .35rem;
  margin-bottom: -.06rem;
}
.header .middle{
  position: relative;
  width: 70%;
}
  .header .middle input{
    width: 100%;
    height: .4rem;
    border: none;
    background-color: #fff;
    border-radius: .1rem;
    text-indent: 1rem;
  }
.header .middle img{
  z-index: 99;
  position: absolute;
  height: .3rem;
  top: .05rem;
  left: .65rem;
}
  .header .right{
    font-size: .11rem;
    text-align: center;
    margin-left: .1rem;
  }
  .header .right img{
    height: .35rem;
    margin-bottom: -.06rem;
  }
  .swiper-container{
    width: 100%;
    height: 2rem;
  }
.swiper-container img{
  width: 100%;
  height: 2rem;
}
  .content .list{
    background-color: #ECE2D1;
    display: flex;
    padding: .1rem;
    box-sizing: border-box;
  }
  .list .item{
    width: 25%;
   display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
.list .item .squel{
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  margin-bottom: .05rem;
}
.list .item .squel img {
  width: 100%;
}

.list .item:nth-of-type(1){
  color: rgb(176,7,14);
}
.list .item:nth-of-type(2){
  color: rgb(132,90,72);
}
.list .item:nth-of-type(3){
  color: rgb(142,47,0);
}
.list .item:nth-of-type(4){
  color: #9D6213;
}
  .now-sale,.shop-tui{
    background-color: #ffffff;
    padding: .1rem;
  }
.now-sale .title,.shop-tui .title{
  display: flex;
  position: relative;
  align-items: center;
}
.now-sale .title img,.shop-tui .title img{
  height: .4rem;
}
.title h2{
  color: #7E0B12;
  margin-left: .1rem;
}
  .title .more{
    position: absolute;
    color: #7E0B12;
    top: 0;
    right: 0;
   line-height: .4rem;
  }
  .shopping-des{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;

  }
  .shopping-des .s-item{
    padding-top: .2rem;
    width: 50%;
    box-sizing: border-box;
    position: relative;
  }
.shopping-des .s-item .floating{
  background-color: #8B1829;
  position: absolute;
  bottom:.2rem;
  right: .1rem;
  color: #ffffff;
  font-weight: 100;
  text-align: center;
}
.shopping-des .s-item .floating p:nth-of-type(1){
  background-color: #730011;
  font-size: .15rem;
  padding: .03rem;
}
.shopping-des .s-item .floating h3{
  font-weight: 100;
  margin: .01rem 0;
}
.shopping-des .s-item .floating p:nth-of-type(2){
  font-size: .13rem;
  padding-bottom: .05rem;
}
.shopping-des .s-item img{
  width: 100%;
}
.shopping-des .s-item>h3{
  margin: .1rem 0;
  color: #474747;
}
.shopping-des .s-item p span{
  color: #7E0B12;
}
.shopping-des .s-item:nth-of-type(odd){
  padding-right: .05rem;
}
.shopping-des .s-item:nth-of-type(even){
  padding-left: .05rem;
}
  .shop-tui{
    margin-top: .2rem;
  }
  .shop-tui .s-item .tui-p{
    color: rgb(102,102,102);
  }
  .shop-tui .s-item .tui-p span{
    color: rgb(255,0,0);
    font-size: .14rem;
  }
  .shop-tui .s-item .tui-p .price{
    font-size: .2rem;
    font-weight: 700;
  }
</style>
