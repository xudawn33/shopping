<template>
  <div class="searchOne">
    <searchControl @wang="fn1" ></searchControl>
    <div class="items">
      <h1>热门搜索</h1>
      <div class="hot">
        <div class="item">
          <img src="./imgs/icon-1@2x.png" alt="">
          <p>美食</p>
        </div>
        <div class="item">
          <img src="./imgs/icon-2@2x.png" alt="">
          <p>饮料</p>
        </div>
        <div class="item">
          <img src="./imgs/icon-3@2x.png" alt="">
          <p>甜点</p>
        </div>
      </div>
    </div>
    <div class="items p">
      <h1>推荐热词</h1>
      <div class="hot">
          <p>甜品零食</p>
          <p>甜点</p>
          <p>甜品零食</p>
        </div>
      </div>
    <div class="items p">
      <div class="top">
        <h1>历史搜索</h1>
        <img src="./imgs/sanchu-icon-1@2x.png" alt="">
      </div>
      <div class="hot">
        <p>甜品零食</p>
        <p>甜点</p>
      </div>
    </div>
    <div class="ul" v-show="showUl" >
      <ul>
      </ul>
    </div>
  </div>
</template>
<script>
  import searchControl from './seachControl/control'
  export default {
    data:function () {
      return {
        showUl:true
      }
    },
    components:{
      searchControl
    },
    methods:{
      fn1:function (data) {
        this.showUl = data;
      },
    }

  }
</script>
<style scoped>
  .searchOne {
    width: 100%;
    height: 6.67rem;
    background: url("./imgs/background-img-1@2x.png")no-repeat;
    background-size: 110%;

  }
  .items {
    width: 100%;
  }
  .items .hot {
    width: 100%;
    display: flex;
    justify-content: flex-start;

  }
  .items h1 {
    font-size: .2rem;
    color:rgb(143,143,143);
    margin: .2rem .1rem;
    font-family: "苹方 中等";
  }
  .item {
    flex:1;
    font-size: .15rem;
    color:rgb(153,153,153);
    text-align: center;
    font-family: 微软雅黑;
    text-align: center;
    margin-top: .1rem;
  }
  .item img {
    height: .4rem;
    vertical-align: top;
  }
  .item p {
    margin-top: .1rem;
  }
  .p .hot {
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  .p .hot p {
    background-color: #e1e1e1;
    color: #7c7c7c;
    padding:.05rem .1rem;
    font-size: .14rem;
    border-radius: .2rem;
    margin: .1rem;
  }
  .p .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .p .top img {
    width: .3rem;
    height: .3rem;
    margin-right: .1rem;
  }
  .ul {
    width: 100%;
    position: absolute;
    top:.65rem;
    left:0;
    background-color: #fff;

  }
  .ul ul {
    width:80%;
    margin: 0 auto;
    list-style: none;
    background-color: #fff;
    color: rgb(102, 102, 102) ;

  }
  .ul ul li {
    width: 80%;
    height: .3rem;
    border-bottom: .01rem dashed #ccc;
    font-size: .13rem;
    line-height: .3rem;
    text-indent: .2rem;
  }
</style>
