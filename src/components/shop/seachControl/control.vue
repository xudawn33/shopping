<template>
  <div class="control">
    <div class="header" id="header">
      <img src="./imgs/back.png" @click="back">
      <img src="./imgs/search-icon-1@2x.png" alt="" class="left" >
      <input type="text" placeholder="甜品" v-model="msg" autofocus >
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
        flagUl :true
      }
    },

    methods:{
      back:function () {
        this.$router.push('baby')
      },
        delText:function () {
          this.msg = ''
        },
      }

  }
</script>
<style scoped>
  .control {
    width: 100%;
    position: fixed;
    z-index: 99;
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
    width: .2rem;
    height: .2rem;
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
