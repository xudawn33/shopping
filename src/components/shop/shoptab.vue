<template>
  <div>
  <div class="tab">
    <router-link to="/home" >
      <shopitem  text="首页">
      </shopitem>
    </router-link>
    <router-link to="/shouye">
      <shopitem  text="店铺"></shopitem>
    </router-link>
    <router-link to="/baby">
      <shopitem  text="宝贝" active="1"></shopitem>
    </router-link>
    <router-link to="/video">
      <shopitem text="视频"></shopitem>
    </router-link>
  </div>
    <div id="tab"></div>
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
          <img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.gpicpath" width="100%" @click="details(index)">
          <p>{{item.gname}}</p>
          <span class="price">{{item.gprice}}</span>
          <p class="reprice"><s>19.80</s></p>
          <img src="./imgs/gouwuche@2x.png" class="car">
        </div>
    </div>
    <div class="gotop">
      <a href="#tab"><img src="./imgs/图层20@2x.png" ></a>
    </div>
  </div>
</template>
<script>
  import shopitem from './shoptabItem'
  export default {
    components:{
      shopitem
    },
    data:function () {
      return {
        activeIndex:'',
        all:[],
        mid:'',
        goodslist:[]
      }
    },
    created:function () {
      this.activeIndex = window.location.hash.substr(2).split('/')[0] || 'home'
    },
    methods:{
      fn:function (msg) {
        this.activeIndex = msg;
      },
      details:function (index) {
        this.$store.state.gid=this.goodslist[index].gid;
        console.log(this.$store.state.gid);
        this.$router.push('details');
      }
    },
    mounted:function () {
      console.log(this.$store.state.smid);
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/goods?str=showGoods',{
        params:{
          mid:this.$store.state.smid
        }
      }).then(function (res) {
        that.goodslist=that.$store.state.all=res.data;
        // console.log(that.$store.state.smid);
        console.log(that.all)

      }).catch(function (err) {
      })
    }

  }
</script>
<style scoped>
  #tab{
    width: 100%;
    height: .6rem;
    position: absolute;
    top: 0;
  }
  .tab {
    width: 100%;
    height: .6rem;
    position: fixed;
    top:0;
    left:0;
    border-top:.01rem solid #606060;
    background-color: rgb(170,40,26);
    z-index: 99;
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
    margin-top: .6rem;
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
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing:border-box;
}
  .img-show .img{
    width: 50%;
    position: relative;
  }
  .img-show .img img{
    width: 100%;
  }
  .img-show .img:nth-of-type(odd){
    padding: 0 .05rem 0 .1rem;
    box-sizing: border-box;
  }
  .img-show .img:nth-of-type(even){
    padding: 0 .1rem 0 .05rem;
    box-sizing: border-box;
  }

  .img-show .img .price{
    color: rgb(241,45,73);
    font-size: .2rem;
  }
  .img-show .img .reprice{
    font-size: .14rem;
  }
  .img-show .img .car{
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
