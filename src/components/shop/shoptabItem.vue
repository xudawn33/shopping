<template>
  <div class="item" @click="fn()">
    <slot name="pic"></slot>
    <p :class="{active:active}">{{text}}</p>
  </div>
</template>
<script>
  export default {
    props:['text','active'],
    data:function () {
      return {
      }
    },
    methods:{
      fn:function () {
        this.$emit('wang',this.index)
      }
    },
    computed:{
      flag:function () {
        if(this.index === this.activeIndex){
          return true
        }
        return false
      }
    }
  }
</script>
<style scoped>
  .item {
    width: 25%;
    float: left;
    line-height: .6rem;
    font-size: .16rem;
    color: #ffffff;
    text-align: center;
    font-family: 微软雅黑;
    position: relative;
    background-color: #AA281A;
    height: .6rem;
  }
  .item  img {
    width: .3rem;
    height: .3rem;
    position: absolute;
    top:.15rem;
    left:.08rem;
  }
  .item p {
    margin-left: .1rem;
  }
  .active{
   color: #EFC269;
  }

</style>
