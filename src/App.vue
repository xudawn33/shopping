<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
    data:function () {
      return{
      }
    },
  name: 'App',
  mounted:function () {
    this.$router.push('home');
    /*var that=this;
    setTimeout(function () {
      that.$router.push('home');
    },6000)*/
  }
}
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }
html{
  font-size:100px;
}
ul{
  list-style: none;
}
  body{
    font-size:.16rem;
    font-family: "PingFang SC Medium";
  }
  a{
    text-decoration: none;
  }
</style>
