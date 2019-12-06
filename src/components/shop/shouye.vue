<template>
  <div class="shouye">
    <div class="tab">
      <router-link to="/home">
        <shopitem  text="首页">
        </shopitem>
      </router-link>
      <router-link to="/shouye">
        <shopitem  text="店铺" active="1"></shopitem>
      </router-link>
      <router-link to="/baby">
        <shopitem  text="宝贝"></shopitem>
      </router-link>
      <router-link to="/video">
        <shopitem text="视频"></shopitem>
      </router-link>
    </div>
    <div class="main">
      <div class="header">
        <img :src="'http://47.94.145.204:8080/SuperMarket1.0/shopupload/'+arr.slogo">
        <h3>{{arr.sname}}</h3>
      </div>
      <img src="./imgs/1.jpg" alt="">
      <img src="./imgs/2.jpg" alt="">
      <img src="./imgs/3.jpg" alt="">
    </div>
  </div>
</template>
<script>
  import shopitem from './shoptabItem'
  export default {
    data:function () {
      return {
        arr:''
      }
    },
    components:{
      shopitem
    },
    mounted:function () {
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/orderform?str=showOrder',{
        params:{
          uid:this.$store.state.user.uid,
          ostatus:1
        }
      }).then(function (res) {
        that.arr=res.data[0].goods.shops;
        console.log(that.arr);
      }).catch(function (err) {
      });
    }
  }
</script>
<style scoped>

  .tab {
    width: 100%;
    height: .6rem;
    position: fixed;
    top:0;
    left:0;
    border-top:.01rem solid #606060;
    background-color: rgb(170,40,26);
    z-index: 99;
    box-sizing: border-box;
  }
  .main{
    margin-top: .6rem;
  }
.main .header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .1rem;
  border-bottom: 1px solid #cccccc;
}
  .main .header img{
    height:.9rem;
    width: .9rem;
    border-radius: 50%;
    margin-right: .2rem;
  }
  .main .header h3{
    flex: 1;
  }
  .main>img{
    width: 100%;
  }
</style>
