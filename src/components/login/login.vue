<template>
  <div class="content">
    <div class="header">
      <div><img src="./img/back.png" @click="back"></div>
      <p class="login">登录</p>
     <p class="register" @click="join">注册</p>
    </div>
    <div class="logo">
      <img src="./img/LOGO.png" alt="">
    </div>
    <div class="main">
        <input type="text" class="username" id="userName" placeholder="账号" v-model="num" name="num">
        <input type="password" class="psd" id="psd" placeholder="密码 " v-model="psd" name="psd">
        <input type="submit" value="登录" class="submit" @click="submitForm($event)">
        <p>忘记密码?</p>
    </div>
    <div class="footer">
      <div class="top">
      <span></span><p>其他登陆方式</p><span></span>
      </div>
      <div class="bottom">
        <img src="./img/img1.png"><img src="./img/img2.png"><img src="./img/img3.png">
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data:function () {
      return{
        name: '',
        age: '',
        file: '',
        num:'',
        psd:'',
        arr:[],
      }
    },
    methods:{
  join:function () {
    this.$router.push('join')
  }
    ,
    back:function () {
      this.$router.go(-1);
    },
// 表单提交
      submitForm(event) {
        var that=this;
        this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/userServlet?str=login',{
          params:{
            num:this.num,
            psd:this.psd
          }
        }).then(function (res) {
          var flag=res.data.substring(0,1);
          console.log(flag);
          that.$store.state.user=JSON.parse(res.data.substring(1,res.data.length));
          console.log(that.$store.state.user);
          that.$router.push('truemine');
        }).catch(function (err) {
        })
      }
    },

  }
</script>
<style scoped>
  .content{
    background-color: rgb(234,234,234);
    height: 100vh;
  }
  .header{
    width: 100%;
    height: .44rem;
    background-color: rgb(170,40,26);
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .1rem;
    box-sizing: border-box;
  }
  .header img{
    height: .24rem;
  }
  .header .register{
      font-size: .12rem;
  }
  .logo{
    text-align: center;
    padding: .25rem 0;
  }
  .logo img{
    height:1.215rem ;
  }
  /*登录框*/
  .main{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .main input,.main .submit{
    display:block;
    width: 3.175rem;
    height: .45rem;
    border: none;
    font-size: .18rem;
    font-weight: 500;
    line-height: .45rem;
  }
  .main input{
    color: #b4b4b4;
    box-shadow: 0 6px 25px;
    text-indent: .1rem;
  }
  .main input[placeholder]{
    line-height: .45rem;
  }
  .main .username{
    background-color: #fff;
    border-radius: .1rem;
  }
  .main .psd{
    margin-top: .2rem;
    border-radius: .1rem;
  }
  .main .submit{
    margin-top: .5rem;
    background-color: rgb(170,40,26);
    color: #fff;
    border-radius: .1rem;
  }
  .main p{
    width: 3.175rem;
    color: rgb(153,153,153);
    font-size: .12rem;
    margin-top: .1rem;
    text-align: right;
  }
  /*脚部*/
  .footer{
    margin-top: .6rem;
    color: rgb(51,51,51);
    font-size: .13rem;
    text-align: center;
  }
  .footer .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer .top>p{
    /*flex: 1;*/
  }
  .footer span{
    display: inline-block;
    height: .01rem;
    width: .86rem;
    background-color: rgb(255, 205, 20)!important;
  }
  .footer span:nth-of-type(1){
    margin-left: .5rem;
  }
  .footer span:nth-of-type(2){
    margin-right: .5rem;
  }
  .bottom{
    margin-top: .2rem;
    background-color: rgb(234,234,234);
  }
  .bottom img{
    height: .53rem;
  }
  .bottom img:nth-of-type(2){
    margin: 0 .3rem;
  }
  a{
    color: #fff;
  }
</style>
