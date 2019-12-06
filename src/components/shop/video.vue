<template>
  <div>
    <div class="tab">
      <router-link to="/home" >
        <shopitem  text="首页">
        </shopitem>
      </router-link>
      <router-link to="/shouye">
        <shopitem  text="店铺"></shopitem>
      </router-link>
      <router-link to="/baby">
        <shopitem  text="宝贝" ></shopitem>
      </router-link>
      <router-link to="/video">
        <shopitem text="视频" active="1"></shopitem>
      </router-link>
    </div>
    <div class="main">
      <i>巧克力</i>
      <video src="./ccyy原版.mp4"
             controls autoplay loop></video>
      <i>奶缇</i>
      <video src="http://video.zcool.cn/88eb1e42b33c4c9faa23a37933ac0b9b/b1415f464a014150b191ba3f26fe6db0-5287d2089db37e62345123a1be272f8b.mp4"
             controls></video>
      <i>火龙果冰钻</i>
      <video src="http://video.zcool.cn/a7fe72c3a58644e59230961ee8a1a554/1bdcace956b74d42b452a53fcedf681e-5287d2089db37e62345123a1be272f8b.mp4"
      controls></video>

    </div>
  </div>
</template>
<script>
  import shopitem from './shoptabItem'
  export default {
    components:{
      shopitem
    },
    data:function () {
      return{
      }
    }
  }
</script>
<style scoped>
  .main video{
    width: 100%;
  }
  .main{
    text-align: center;
  }
  .main i{
    color: #AA281A;
    font-size: 20px;
    font-weight: 700;
  }
  .main i:nth-of-type(2){
    color: #FFBC81;
  }
  .main i:nth-of-type(3){
    color: #F60079;
  }
</style>
