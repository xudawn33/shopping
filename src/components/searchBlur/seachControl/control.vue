<template>
  <div class="control">
    <div class="header" id="header">
      <img src="./imgs/back.png" @click="back">
      <img src="./imgs/search-icon-1@2x.png" alt="" class="left" >
      <input type="text" placeholder="搜索商品" v-model="msg" autofocus  name="gname" @keyup.13="submitForm($event)">
      <img src="./imgs/search-icon-2@2x.png" alt="" class="right" @click="delText()">
    </div>
    <div class="c">
    </div>
  </div>
</template>
<script>
  import './../../../../node_modules/jquery'
  export default  {
    data:function () {
      return {
        msg:'',
        flagUl :true,
        left:'',
        right:''
      }
    },

    methods:{
      submitForm(event) {
        var that=this;
        this.$http.get('http://47.94.145.204:8080/SuperMarket1.0/goods?str=likeGoods',{
          params:{
            gname:this.msg,
          }
        }).then(function (res) {
          console.log(res);
          that.$store.state.search=res.data;
          console.log(that.$store.state.search);
          that.$router.push('searchlist');
        }).catch(function (err) {
        })
      },
      back:function () {
        this.$router.go(-1)
      },
      showUl:function () {
        if(this.msg === ''){
          this.flagUl= false;
        }else if(this.msg){
          this.flagUl= true;
        }
      },
        delText:function () {
          this.msg = '';
          this.showUl();
          this.pao();
        },
      pao:function () {
        this.$emit('wang',this.flagUl)
      }
      }

  }
</script>
<style scoped>
  .control {
    width: 100%;
  }
  #header {
    position: fixed;
    top:0;
    left:0;
    z-index: 99;
  }
  .header {
    width: 100%;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(170,40,26);
  }
  .c {
    width: 100%;
    height: .6rem;
  }
  .header input {
    margin-left: .1rem;
    width: 80%;
    height: .4rem;
    border: none;
    outline: none;
    border-radius: .08rem;
    text-indent: .35rem;
    font-size: .15rem;
    display: flex;
    justify-content: space-between;
    color:rgb(102,102,102);
  }
  .header img:nth-of-type(1) {
    width: .24rem;
    height: .24rem;
    margin-left: .1rem;
  }
  .header img:nth-of-type(2),.header img:nth-of-type(3) {
    width: .35rem;
    height: .35rem;
  }
  .header img:nth-of-type(2),.header img:nth-of-type(3){
    position: absolute;
    top:.13rem;
  }
  .header img:nth-of-type(2) {
    left: .45rem;
  }
  .header img:nth-of-type(3) {
    right: .4rem;
  }

</style>
