<template>
  <div class="submit">
    <Header msg="提交订单">
      <img src="./imgs/back.png" alt="" slot="left">
    </Header>
    <div class="main" v-for="(item,index) in arr">
      <div class="top" >
        <p>{{item.user}}   {{item.phone}}</p>
        <img src="./imgs/icon-map@2x.png" alt="">
        <p>{{item.addr}}</p>
        <img src="./imgs/prev.png" alt="">
        <div class="line">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="session">
        <div class="item">
          <div class="left"><img :src="'http://47.94.145.204:8080/SuperMarket1.0/upload/'+truearr.gpicpath" width="100%"></div>
          <div class="right">
            <h3>{{truearr.gname}}</h3>
            <p class="tasty">描述：{{truearr.gdescribe}}</p>
            <p><span>￥</span><strong>{{truearr.gprice}}</strong>/件</p>
            <div class="number">
              <div class="change" @click="sub(index)">-</div>
              {{item.num}}
              <div class="change" @click="sum1(index)">+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="favourable">
           <p class="tip">平台优惠</p>
            <div>
              <span>每满120元满减20元</span>
              <img src="./imgs/prev.png" alt="">
            </div>
      </div>
      <div class="pay">
        <div class="one">
          <p class="tip">付款方式</p>
          <div>
            <span>更多支付方式</span>
            <img src="./imgs/prev.png" alt="">
          </div>
        </div>
        <div class="payitem">
          <div class="payleft">
            <img src="./imgs/weixin.png" alt="">
            <p>微信支付</p>
          </div>
          <div class="payright" @click="sele1()">
            <img v-show="!flag1" src="./imgs/sel.png" alt="">
            <img v-show="flag1" src="./imgs/icon-3@2x.png" alt="">
          </div>
        </div>
        <div class="payitem">
          <div class="payleft">
            <img src="./imgs/qq.png" alt="">
            <p>QQ钱包支付</p>
          </div>
          <div class="payright" @click="sele2()">
            <img v-show="!flag2" src="./imgs/sel.png" alt="">
            <img v-show="flag2" src="./imgs/icon-3@2x.png" alt="">
          </div>
        </div>
        <div class="payitem">
          <div class="payleft">
            <img src="./imgs/zhifu.png" alt="">
            <p>支付宝支付</p>
          </div>
          <div class="payright" @click="sele3()">
            <img v-show="!flag3" src="./imgs/sel.png" alt="">
            <img v-show="flag3" src="./imgs/icon-3@2x.png" alt="">
          </div>
        </div>
      </div>
      <div class="footer">
        <span>共{{item.num}}件</span>
        <p>合价 <span >￥</span><span class="one" >{{item.price}}</span> <span>免运费</span></p>
        <button @click="submitForm($event)">立即支付</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from './header'
  export default {
    components:{
      Header,
    },
    data:function () {
      return {
        gid:'',
        arr1:'',
        truearr:'',
        arr:[
          {
            user:'小沫',
            phone:123456789,
            addr:'河南省郑州市金水区花园路120号兰德中心',
            num:1,
            price:''
        }
        ],
        flag1:true,
        flag2:true,
        flag3:true
      }
    },
    mounted:function () {
      this.gid=this.$store.state.gid;
      this.arr1=this.$store.state.all;
      for(var i=0;i<this.arr1.length;i++){
        if(this.gid===this.arr1[i].gid){
          this.truearr=this.arr1[i]
        }
      }
      this.arr[0].price=(this.truearr.gprice)*(this.arr[0].num)
    },
    methods:{
      submitForm(event) {
        var that=this;
        this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/orderform?str=addOrder',{
          params:{
            goodsnum:this.arr[0].num,
            payment:this.arr[0].price,
            gid:this.gid,
            uid:this.$store.state.user.uid,
            buy:1
          }
        }).then(function (res) {
          console.log(res);
        }).catch(function (err) {
        });
        this.$router.push('pay')
      },



      sele1:function () {
        this.flag1 =!this.flag1;
      },
      sele2:function () {
        this.flag2 =!this.flag2;
      },
      sele3:function () {
        this.flag3 =!this.flag3;
      },
      sub:function (index) {
        console.log(1);
        if(this.arr[index].num !==0){
          this.arr[index].num--;
          this.arr[index].price=(this.truearr.gprice)*(this.arr[0].num)
        }else if(this.arr[index].num ===0){
          this.arr[index].num = 0;
          this.arr[0].price=(this.truearr.gprice)*(this.arr[0].num)
        }
      },
      sum1:function (index) {
        this.arr[index].num++;
        this.arr[index].price=(this.truearr.gprice)*(this.arr[index].num)
      },
    }

  }
</script>
<style scoped>
  .submit {
    width: 100%;
  }
  .submit .top {
    width: 100%;
       position: relative;
    overflow: hidden;
    background-color: #fff;
  }
  .submit .top p {
    width: 85%;
    padding-right:.05rem;
    margin: .1rem .35rem;
  }
  .submit .top p:nth-of-type(1) {
    margin-top: .2rem;
    font-size: .2rem;
    color:rgb(51,51,51);
  }
  .submit .top p:nth-of-type(2) {
    font-size: .17rem;
    color:rgb(102,102,102);
  }
  .submit .top img {
    width: .3rem;
    height: .3rem;
    position: absolute;
  }
  .submit .top img:nth-of-type(1) {
    left:.05rem;
    top:.45rem;
  }
  .submit .top img:nth-of-type(2) {
    right:0;
    top:.22rem;
  }
  .submit .top .line {
    width: 90%;
    margin: .2rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .submit .top .line div {
    width: .3rem;
    height: .04rem;
    background-color: #02a3d4;
    transform: skew(30deg,0deg);
  }
  .submit .top .line div:nth-of-type(2),
  .submit .top .line div:nth-of-type(4),
  .submit .top .line div:nth-of-type(6) {
    background-color: #e02242;
  }
  .submit .session {
    width: 100%;
    margin-top: .1rem;
    margin-bottom: .1rem;
    background-color: #fff;
    overflow: hidden;
  }
  .submit .session .item {
    width: 90%;
    position: relative;
    margin: .1rem .08rem;
    display: flex;
    justify-content: flex-start;
  }
  .submit .session .item .left {
    width: 35%;
  }
  .submit .session .item .left img {
    width: 100%;
    border-radius: .06rem;
  }
  .submit .session .item .right {
    width:65%;
    margin-left: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .submit .session .item .right h3 {
    font-size: .13rem;
    color:rgb(51,51,51);
  }
  .submit .session .item .right p:nth-of-type(1) {
    font-size: .12rem;
    color:rgb(153,153,153);
  }
  .submit .session .item .right p:nth-of-type(2) {
    font-size: .13rem;
    color:rgb(51,51,51);
  }
  .submit .session .item .right p:nth-of-type(2) span{
    color:rgb(256,62,41);
  }
  .submit .session .item .right p:nth-of-type(2) strong{
    color:rgb(256,62,41);
    font-size: .16rem;
  }
  .submit .session .item .right .number {
    width: .6rem;
    height: .15rem;
    line-height: .15rem;
    display: flex;
    border-radius: .2rem;
    font-size: .13rem;
    justify-content: space-between;
    background-color: #fff;
    position: absolute;
    bottom:.05rem;
    right:.1rem;
  }
  .submit .session .item .right .number .change {
    width: .15rem;
    height: .15rem;
    font-size: .15rem;
    border-radius: 50%;
    background-color: rgb(170,40,26);
    text-align: center;
    line-height: .12rem;
    color: white;
  }
  .submit .session .item:last-of-type {
    margin-bottom: .3rem;
  }
  .submit .favourable {
    width: 100%;
    height: .6rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .submit .favourable .tip {
    font-size: .13rem;
    color:rgb(51,51,51);
    margin-left: .1rem;
  }
  .submit .favourable div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .submit .favourable div span {
    font-size: .13rem;
    color:rgb(256,62,41);
  }
  .submit .favourable div img {
    width: .3rem;
    height: .3rem;
  }
  .submit .pay {
    width: 100%;
    margin-top: .1rem;
    background-color: #fff;
  }
  .submit .pay .one {
    width: 100%;
    height: .6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .submit .pay .one .tip {
    font-size: .13rem;
    color:rgb(51,51,51);
    margin-left: .1rem;
  }
  .submit .pay .one div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .submit .pay .one div span {
    font-size: .11rem;
    color: #939393;
  }
  .submit .pay .one div img {
    width: .3rem;
    height: .3rem;
  }
  .submit .pay .payitem {
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .05rem  0;
  }
  .submit .pay .payitem .payleft {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:rgb(51,51,51);
    font-size: .13rem;
  }
  .submit .pay .payitem .payleft img {
    width: .4rem;
    height: .4rem;
    margin-right: .1rem;
    margin-left: .1rem;
  }
  .submit .pay .payitem .payright img {
    width: .3rem;
    height: .3rem;
    margin-right: .1rem;
  }
  .submit .pay .payitem:last-of-type {
    margin-bottom: .6rem;
    padding-bottom:.05rem;
  }
  .submit .footer {
    width: 100%;
    height: .6rem;
    background-color: #fff;
    position: fixed;
    bottom:0;
    left:0;
    border-top:.01rem solid #44a988;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .submit .footer span {
    color:rgb(51,51,51);
    font-size: .13rem;
    margin-left: .1rem;
  }
  .submit .footer p {
    font-size: .14rem;
    margin-left: .3rem;
  }
  .submit .footer p span {
    font-size: .13rem;
    color:rgb(256,62,41);
    margin: 0 .05rem;
  }
  .submit .footer p .one {
    font-size: .16rem;
    margin-left: .1rem;
  }
  .submit .footer button {
    width: 1rem;
    font-size: .2rem;
    height: 100%;
    color: white;
    border: none;
    outline: none;
    background-color: rgb(170,40,26);
  }
</style>
