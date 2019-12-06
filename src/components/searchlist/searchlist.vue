<template>
  <div>
    <cotrol></cotrol>
    <div class="xu-left">
      <img src="./imgs/back.png" @click="back">
    </div>
    <div class="xu-right"></div>
    <ul class="list" >
      <li>
        <p>地区 <span>﹀</span></p>
      </li>
      <li>
        <p>分类 <span>﹀</span></p>
      </li>
      <li>
        <p>价格 <span>﹀</span></p>
      </li>
    </ul>
    <div class="img-show">
        <div class="img" v-for="(item,index) in goodslist">
          <img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.gpicpath" width="100%" @click="detile(index)" >
          <p>{{item.gname}}</p>
          <span class="price">￥{{item.gprice}}</span>
          <p class="reprice">库存: {{item.gcount}}</p>
          <img src="./imgs/gouwuche@2x.png" class="car">
        </div>
    </div>
    <div class="gotop">
      <a href=""><img src="./imgs/图层20@2x.png" ></a>
    </div>
  </div>
</template>
<script>
  import shopitem from './../../components/shop/shoptabItem'
  import cotrol from './../../components/seachControl/control'
  export default {
    components:{
      shopitem,
      cotrol
    },
    data:function () {
      return {
        activeIndex:'',
        goodslist:'',
        all:[]
      }
    },
    created:function () {
      this.activeIndex = window.location.hash.substr(2).split('/')[0] || 'home'
    },
    mounted:function () {
      this.goodslist=this.$store.state.search;
      console.log(this.goodslist);


      console.log(this.$store.state.smid);
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/goods?str=showGoods',{
        params:{
          mid:this.$store.state.smid
        }
      }).then(function (res) {
        that.all=that.$store.state.all=res.data;
        // console.log(that.$store.state.smid);
        console.log(that.all)

      }).catch(function (err) {
      });

    },
    methods:{
      fn:function (msg) {
        this.activeIndex = msg;
      },
      back:function () {
        this.$router.go(-1)
      },
      detile:function (index) {
        this.$store.state.gid=this.goodslist[index].gid;
        console.log(this.$store.state.gid);
        this.$router.push('details');
      }
    }

  }
</script>
<style scoped>
  .xu-left,.xu-right{
    height: .6rem;
    width: .35rem;
    background-color: #AA281A;
    position: absolute;
    top: 0;
    z-index: 99;
  }
  .xu-left{
    left: .05rem;
  }
  .xu-left img{
    width: .24rem;
    position: absolute;
    top: .18rem;
  }
  .xu-right{
    right: 0;
  }
  .item  img {
    width: .2rem;
    height: .2rem;
    position: absolute;
    top:.2rem;
    left:.1rem;
  }
  .item p {
    margin-left: .1rem;
  }
  .list{
    display: flex;
  }
  .list li{
    color: rgb(51,51,51);
    flex: 1;
    text-align: center;
    padding: .15rem 0;
  }
  .list li>p{
    border-left: 1px solid #cccccc;
  }
  .list li:nth-of-type(1)>p{
    border: none;
  }
.img-show{
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
}
 .img{
    width: 50%;
    position: relative;
   box-sizing: border-box;
  }
 .img:nth-of-type(odd){
    padding: 0 .05rem 0 .1rem;
  }
 .img:nth-of-type(even){
    padding: 0 .1rem 0 .05rem;
  }
 .img img{
    width: 100%;
  }
 .img .price{
    color: rgb(241,45,73);
    font-size: .2rem;
  }
 .img .reprice{
    font-size: .14rem;
  }
.img .car{
    position: absolute;
    height: .4rem;
    width: .4rem;
    right: 0.05rem;
    bottom: 0;
  }
  .gotop{
    width: 100%;
    text-align: center;
  }
  .gotop img{
    width: 40%;
  }
</style>
