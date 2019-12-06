<template>
  <div class="join">
    <div class="top">
      <img src="./imgs/back.png" @click="back">
      注册
    </div>
    <div class="sesstion">
        <div class="item">
              <span>账号：</span><input type="text" placeholder="请输入手机号"  v-model="num" @blur="blurUser()">
              <div class="pic">
                <div class="picOne" v-show="show">
                  <img v-show="pic"  src="./imgs/icon-4@2x.png" alt="">
                  <img  v-show="!pic" src="./imgs/icon-5@2x.png" alt="">
                </div>
              </div>
            </div>
        <div class="item">
          <span>密码：</span><input type="password" placeholder="请输入密码" v-model="psd" @blur="bluePsd()">
          <div class="pic">
            <div class="picOne" v-show="shown">
              <img v-show="picn"  src="./imgs/icon-4@2x.png" alt="">
              <img  v-show="!picn" src="./imgs/icon-5@2x.png" alt="">
            </div>
          </div>
        </div>
        <div class="item">
        <input type="text" placeholder="请输入验证码"><button @click="countDown()">{{msg}}</button>
      </div>
        <div class="item">
          <button class="submit" @click="submitForm($event)">注册</button>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data:function () {
      return {
        num:'',
        pic:false,
        picn:false,
        show:false,
        shown:false,
        psd:'',
        msg:'获取验证码',
        count:'',
        shows: false,
        timer: null,
        // 表单
        name: '',
        age: '',
        file: ''
      }
    },
    methods:{
      blurUser:function () {
        var reg = /^[1][3|4|5|7|8|9][0-9]{9}$/;
        if(reg.test(this.num)){
          this.show = true;
          this.pic = true
        }else{
          this.show = true;
          this.pic = false
        }
      },
      bluePsd:function () {
        var reg = /[\w]{6,18}/;
        if(reg.test(this.psd)){
          this.shown = true;
          this.picn = true
        }else{
          this.shown = true;
          this.picn = false
        }
      },
      countDown: function () {
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.shows = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.msg = this.count + 's';
            } else {
              this.shows = false;
              clearInterval(this.timer);
              this.timer = null;
              this.msg = '重新获取验证码'
            }
          }, 1000)
        }
      },
      back:function () {
        this.$router.go(-1);
      },
      // 表单提交
      submitForm(event) {
        var that=this;
        this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/userServlet?str=register',{
          params:{
            num:this.num,
            psd:this.psd
          }
        }).then(function (res) {
            that.$router.push('login')
        }).catch(function (err) {
          console.log(err)
        })
      }
  }
  }
</script>
<style scoped>
     .join {
       width: 100%;
       background-color: rgb(234,234,234);
       height: 100vh;
     }
     .join .top {
       width: 100%;
       height: .44rem;
       background-color: rgb(170,40,26);
       font-size: .16rem;
       color:rgb(255,255,255);
       text-align: center;
       line-height: .44rem;
       position: relative;
       margin-bottom: .5rem;
     }
     .join .top img {
        height: .24rem;
        position: absolute;
        top:.1rem;
        left:.1rem;
      }
     .sesstion {
       width: 100%;
     }
     .sesstion .item {
       width: 3.18rem;
       height: .45rem;
       margin:.2rem auto;
       background-color: rgb(255,255,255);
       line-height: .45rem;
       border-radius: .1rem;
       box-shadow: 0 .06rem .25rem rgb(201, 201, 201);
  }
     .sesstion .item:nth-of-type(1) {
       margin-top: .5rem;
       display: flex;
       justify-content: space-around;
       align-items: center;
     }
     .sesstion .item:nth-of-type(1) .pic {
       width: .45rem;
     }
     .sesstion .item:nth-of-type(1) .pic img{
       width: .3rem;
       height: .3rem;
       margin-top: .15rem;
     }
     .sesstion .item:nth-of-type(2) {
       display: flex;
       justify-content: space-around;
       align-items: center;
     }
     .sesstion .item:nth-of-type(2) .pic {
       width: .45rem;
     }
     .sesstion .item:nth-of-type(2) .pic img{
       width: .3rem;
       height: .3rem;
       margin-top: .15rem;
     }
     .sesstion .item span {
       display: inline-block;
       width: .8rem;
       height: .45rem;
       font-size: .16rem;
       color: rgb(153,153,153);
       text-align: center;

     }
     .sesstion .item input {
       width:1.91rem;
       height: .45rem;
       border: none;
       outline: none;
       line-height: .45rem;
       color:rgb(153,153,153);
       font-size: .16rem;
     }
     .sesstion .item input::placeholder {
       font-size: .16rem;
       color:rgb(204,204,204);
     }
     .sesstion .item:nth-of-type(3) button{
       width: 1.2rem;
       height: .45rem;
       text-align: center;
       line-height: .45rem;
       border: none;
       outline: none;
       font-size: .16rem;
       background-color: rgb(186,183,185);
       color:rgb(255,255,255);
       border-radius: 0 .1rem .1rem 0;
       vertical-align: top;
     }
     .sesstion .item:nth-of-type(3) input {
       width: 1.98rem;
       border-left:none;
       text-indent: .1rem;
       border-radius: .1rem;
     }
     .sesstion .item:nth-of-type(4)  {
       width: 3.18rem;
       height: .45rem;
       margin:.1rem auto;
       text-align: center;
       line-height: .4rem;
       background-color: rgb(170,40,26);
       margin-top: .5rem;

     }
     .sesstion .item:nth-of-type(4) .submit {
       line-height: .45rem;
       color:rgb(255,255,255);
       font-size: .18rem;
       outline: none;
       border: none;
       background-color: rgb(170,40,26);
     }

</style>
