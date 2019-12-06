<template>
  <div>
    <router-view></router-view>
    <div class="tabbar">
      <div class="item">
        <img :src="url1" alt="">
        <p><router-link to="/home" :class={active:a1}>首页</router-link></p>
      </div>
      <div class="item">
        <img :src="url2" alt="">
        <!--<p><router-link to="/shopping" :class={active:a2}>购物车</router-link></p>-->
        <p v-show="uid"><router-link to="/shopping" :class={active:a2}>购物车</router-link></p>
        <p v-show="!uid"><router-link to="/goodsNull" :class={active:a2}>购物车</router-link></p>
      </div>
      <div class="item">
        <img :src="url3" alt="">
        <p v-show="uid"><router-link to="/list" :class={active:a3}>订单列表</router-link></p>
        <p v-show="!uid"><router-link to="/nulllist" :class={active:a3}>订单列表</router-link></p>
      </div>
      <div class="item">
        <img :src="url4" alt="">
       <keep-alive> <p v-show="uid"><router-link to="/truemine" :class={active:a4}>我</router-link></p></keep-alive>
      <keep-alive><p v-show="!uid"><router-link to="/mine" :class={active:a4}>我</router-link></p></keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['url1','url2','url3','url4','a1','a2','a3','a4'],
  data:function () {
    return{
      uid:0,
    }
  },
  mounted:function () {
    if(this.$store.state.user.uid){
      this.uid=1
    }else {
      this.uid=0
    }
  },
}
</script>
<style scoped>
  .active{
    color: #7E0B12;
  }
  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .6rem;
    border-top: 1px solid #cccccc;
    background-color: #ffffff;
  }
  .tabbar{
    display: flex;
   padding-top: .05rem;
    box-sizing: border-box;
  }
  .tabbar .item{
    width: 25%;
    text-align: center;
  }
  .tabbar .item img{
    width: .33rem;
    vertical-align: top;
  }
  .tabbar .item p{
    font-size: .13rem;
  }
  a{
    text-decoration: none;
    color: #515151;
  }
</style>
