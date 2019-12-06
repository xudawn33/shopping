<template>
 <div class="goods">
   <Header msg="我的购物车">
     <img src="./imgs/back.png" alt="" slot="left" @click="back">
   </Header>
   <div class="container">
     <ul>
       <li class="list-item " v-for="(item,index) in arr " data-type="0">
         <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
           <div class="select" @click="selectKey(index)">
             <img v-show="select1" src="./imgs/icon-3@2x.png">
             <img v-show="!select1" src="./imgs/icon-2@2x.png">
           </div>
             <img class="list-img" :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+item.goods.gpicpath">
           <div class="list-content">
             <h3 class="title">{{item.goods.gname}}</h3>
             <p class="tips">￥<strong>{{item.goods.gprice}}</strong></p>
             <div class="time">
               <div class="sub" @click="subNum(index)">-</div>
              {{num}}
               <div class="sum" @click="sumNum(index)">+</div>
             </div>
           </div>
         </div>
         <div class="delete" @click="deleteItem(index)" :data-index="index"><img src="./imgs/icon-1@2x.png" alt=""></div>
       </li>
     </ul>
   </div>
   <div class="hot">
     <h3>推荐</h3>
     <div class="sec">
       <div class="item">
         <img src="./imgs/img@2x.png" alt="">
         <p>￥588</p>
         <p>水果蛋糕</p>
       </div>
       <div class="item">
         <img src="./imgs/img@2x.png" alt="">
         <p>￥588</p>
         <p>水果蛋糕</p>
       </div>
       <div class="item">
         <img src="./imgs/img@2x.png" alt="">
         <p>￥588</p>
         <p>水果蛋糕</p>
       </div>
       <div class="item">
         <img src="./imgs/img@2x.png" alt="">
         <p>￥588</p>
         <p>水果蛋糕</p>
       </div>
     </div>
     <div class="bottom">
       <div class="left">
         <div class="select" @click="select()">
           <img v-show="!choose" src="./imgs/icon-3@2x.png" alt="" >
           <img v-show="choose" src="./imgs/icon-2.png" alt="" >
         </div>
         全选
       </div>
       <div class="right">
          <p class="pri">￥{{priceAll}}</p>
          <button>去结算（{{all}}）</button>
       </div>
     </div>
   </div>
   <tabbar url1="./static/imgs/home.png" url2="./static/imgs/xu-shopping.png" url3="./static/imgs/list.png"
           url4="./static/imgs/mine.png" a2=1></tabbar>
 </div>
</template>
<script>
  import  Header from './header'
  import tabbar from './../../components/tabBar/tabbar'
  export default {
    components:{
      Header,
      tabbar
    },
      data :function () {
        return {
          select1:true,
          num:1,
          startX : 0 ,
          endX : 0 ,
          priceAll:0.0,
          choose:true,
          all:0,
          arr:''

        }
      },
    methods : {
      back:function () {
        this.$router.go(-1);
      },
      hh:function(){
          var price = 0;
          var numb = 0;
          for(var i = 0; i < this.arr.length; i++) {
            if(this.select1 ===false) {
              price += this.num * this.arr[i].goods.gprice;
              numb += this.num;
            }
          }
          this.priceAll = price;
          this.all = numb;
          console.log(numb);
          console.log(price);
      },
        //跳转
        selectKey:function (index) {
          this.select1 = !this.select1;
          for(var i = 0;i<this.arr.length;i++){
            if(this.select1 !==false){
              this.choose = true;
            }else {
              this.choose =false
            }

          }
          this.hh();

        },
        subNum:function (index) {
          if(this.num !==0){
            this.num--;
            this.hh();
          }else if(this.num ===0){
            this.num = 0;
            this.deleteItem(index)
          }
        },
        sumNum:function (index) {
          this.num++;
          this.hh();
        },
        select:function () {
          var all = 0;
          if(this.choose==false) {
            for(var i = 0; i < this.arr.length; i++) {
              this.select1 = true;
              all+=this.arr[i].goods.gprice*this.num;

            }
            this.hh();
          } else {  //取消全选
            for(var i = 0; i < this.arr.length; i++) {
              this.select1 = false;
            }
            this.hh();
          }
          this.choose = !this.choose;
        },
        skip(){
          if( this.checkSlide() ){
            this.restSlide();
          }
        },
        //滑动开始
        touchStart(e){
          // 记录初始位置
          this.startX = e.touches[0].clientX;
        },
        //滑动结束
        touchEnd(e){
          // 当前滑动的父级元素
          let parentElement = e.currentTarget.parentElement;
          // 记录结束位置
          this.endX = e.changedTouches[0].clientX;
          // 左滑
          if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
            this.restSlide();
            parentElement.dataset.type = 1;
          }
          // 右滑
          if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
            this.restSlide();
            parentElement.dataset.type = 0;
          }
          this.startX = 0;
          this.endX = 0;
        },
        //判断当前是否有滑块处于滑动状态
        checkSlide(){
          let listItems = document.querySelectorAll('.list-item');
          for( let i = 0 ; i < listItems.length ; i++){
            if( listItems[i].dataset.type == 1 ) {
              return true;
            }
          }
          return false;
        },
        //复位滑动状态
        restSlide(){
          let listItems = document.querySelectorAll('.list-item');
          // 复位
          for( let i = 0 ; i < listItems.length ; i++){
            listItems[i].dataset.type = 0;
          }
        },
        //删除
        deleteItem(index){
          this.restSlide();
          // 删除
          this.arr.splice(index,1);
          this.hh();
        }
      },
    mounted:function () {
      var that=this;
      this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/orderform?str=showOrder',{
        params:{
          uid:this.$store.state.user.uid,
          ostatus:0
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
  .goods {
    width: 100%;
    background-color: #fff;
  }
  .container {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
  }
  .list-item{
    width: 100%;
    position: relative;
    height:.8rem;
    transition: all 0.2s;
    padding: 0 .03rem;
    margin: .1rem 0;
    border-radius: .05rem;

  }
  .list-item:nth-of-type(1) {
    margin-top: .1rem;
  }
  .list-item[data-type="0"]{
    transform: translate3d(0,0,0);
  }
  .list-item[data-type="1"]{
    transform: translate3d(-2rem,0,0);
  }
  .list-item:after{
    content: " ";
    position: absolute;
    left: 0.2rem;
    bottom: 0;
    right: 0;
    height:.01rem;
    color: #ccc;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  .list-box{
    padding: 0.2rem;
    background: #fff;
    display: flex;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
  }
  .list-box .select {
    width: .3rem;
    height: .3rem;
    margin-right: .2rem;
    border-radius: 50%;
  }
  .list-box .select img {
    width: .3rem;
    height: .3rem;
  }
  .list-item .list-img{
    display: block;
    width: .6rem;
    height: .6rem;
  }
  .list-item .list-content{
    padding: 0.1rem 0 0.1rem 0.2rem;
    position: relative;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }
  .list-item .title{
    display: block;
    color: #333;
    overflow: hidden;
    font-size: .15rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .list-item .tips{
    display: block;
    overflow: hidden;
    font-size: .12rem;
    color: #fd7902;
    line-height: .2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .1rem;
  }
  .list-item .time{
    width: .8rem;
    height: .3rem;
    background-color: #f5e5e3;
    border-radius: .5rem;
    text-align: center;
    line-height: .3rem;
    color: #fe93ba;
    display: flex;
    justify-content: space-between;
    font-size: .15rem;
    position: absolute;
    right: 0;
    top: 0.1rem;
    margin-top: .1rem;
    margin-right: .1rem;
  }
  .list-item .time .sub, .list-item .time .sum {
    width: .3rem;
    height: .3rem;
    font-size: .15rem;
    background-color: rgb(170,40,26);
    border-radius: 50%;
    line-height: .3rem;
    text-align: center;
    color: white;
  }
  .list-item .delete{
    width: 2rem;
    height: 1rem;
    background: #ff4949;
    position: absolute;
    top:0;
    right: -2rem;
  }
  .list-item .delete img {
    width: .5rem;
    height: .5rem;
    margin: .15rem .7rem;
  }
  .hot {
    width: 100%;
    background-color: #fff;
    margin-top: .1rem;
  }
  .hot .sec {
    width: 90%;
    margin: .1rem auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 1.2rem;

  }
  .hot .sec .item {
    width: 40%;
    text-align: center;
    margin: .1rem;
  }
  .hot .sec .item img {
    width: 1rem;
    height: 1rem;
  }
  .hot .sec .item p {
    font-size: .17rem;
    color:rgb(148,148,148);
    padding: .1rem 0;
  }
  .hot .sec .item p:nth-of-type(1) {
    color:#fd7902;
  }
  .hot h3 {
    font-size: .2rem;
    color:rgb(61,50,55);
    margin:.1rem;
  }
  .bottom {
    width: 100%;
    height: .6rem;
    background-color: rgb(170,40,26);
    border-radius: .06rem;
    margin: .1rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: .6rem;
  }
  .bottom .left {
    width: 30%;
    display: flex;
    align-items: center;
    color:white;
  }
  .bottom .left img {
    width: .3rem;
    height: .3rem;
    margin-left: .1rem;
  }
  .bottom .right {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .bottom .right .pri {
    color: white;
    margin-right: .1rem   ;
  }
  .bottom .right button {
    height: .4rem;
    margin-right: .12rem;
    border: none;
    color: rgb(153,51,51);
    background-color: #fff;
    border-radius: .06rem;
    outline: none;
    padding:.03rem;
    font-size: .2rem;
    font-weight: 300;
  }

</style>
