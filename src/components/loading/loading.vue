<template>
  <div class="content">
    <div class="word">
      <h2 class="monsterText">Sweet <span>❤</span> Cake</h2>
      <h2 class="opText">Sweet <span>❤</span> Love</h2>
    </div>
    <div class="haha">
    <div class="monster">
      <div class="eye">
        <div class="eyeball"></div>
      </div>
      <div class="mouth"></div>
    </div>
    <div class="monster blue">
      <div class="eye">
        <div class="eyeball"></div>
      </div>
      <div class="mouth"></div>
    </div>
    </div>
    <div class="pageLoading">
      <div class="monster">
        <div class="eye">
          <div class="eyeball"></div>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="loading">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
    mounted:function () {
      var percent = 0

      function eatCount(){
        // document.querySelector(".monsterText").innerHTML = ("你好<br>在这儿");
        // $(".monsterText").html("We are<br>SQUARE<br>MONSTER!")
      }

      var timer = setInterval(function(){
        $(".bar").css("width",percent+"%")
        // document.querySelector(".bar").style.setProperty("width",percent+"%")
        percent+=1
        if (percent>100){
          // $(".pageLoading").addClass("complete")
          document.querySelector(".pageLoading").classList.add("complete");
          setTimeout(eatCount,3000);
          clearInterval(timer);
        }
      },30)
    }
  }
</script>
<style scoped>
  .content {
    margin: 0;
    padding: 0;
    width: 100%;
    height:100vh;
    background-color: #FFEAE9;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   font-family: "Segoe Print";
  }
  .content .word{
    margin-bottom: .8rem;
    text-align: center;
  }
  .content .word h2{
    color: rgba(229, 90, 84, 0.49);
    text-align: center;
  }
  .content .word h2 span{
    color: #E55A54;
    font-size: .3rem;
  }
 .content .haha{
   display: flex;
 }
  .monster {
    width: 1.1rem;
    height: 1.1rem;
    background-color: #E55A54;
    border-radius: .2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    margin: 10px;
    box-shadow: 0 .1rem .2rem rgba(0, 0, 0, 0.2);
    position: relative;
    animation: jumping 0.8s infinite alternate;
  }
  .monster .eye {
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .monster .eyeball {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #0C4475;
  }
  .monster .mouth {
    width: 32%;
    height: .12rem;
    border-radius: .12rem;
    background-color: white;
    margin-top: 15%;
  }
  .monster:before, .monster:after {
    content: "";
    display: block;
    width: 20%;
    height: .1rem;
    position: absolute;
    left: 50%;
    top: -.1rem;
    background-color: #fff;
    border-radius: .1rem;
  }
  .monster:before {
    transform: translateX(-70%) rotate(45deg);
  }
  .monster:after {
    transform: translateX(-30%) rotate(-45deg);
  }
  .monster, .monster * {
    transition: 0.5s;
  }
  .monster.blue {
    background-color: #0C4475;
    animation-delay: 0.5s;
  }
  .monster.blue .mouth, .monster.blue .eyeball {
    background-color: #E55A54;
  }
  @keyframes jumping {
    50% {
      top: 0;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }
    100% {
      top: -50px;
      box-shadow: 0px 120px 50px rgba(0, 0, 0, 0.2);
    }
  }
  @keyframes eyemove {
    0%,10% {
      transform: translate(50%);
    }
    90%,100% {
      transform: translate(-50%);
    }
  }
  .monster .eyeball {
    animation: eyemove 1.6s infinite alternate;
  }

  h2 {
    color: white;
    font-size: .4rem;
  }

  h3 {
    margin-top: 0;
    opacity: 0.5;
    color: white;
  }

  .pageLoading {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /*background-color: #0C4475;*/
    background: url("./bg.jpg") no-repeat;
    background-size: 100%;
    flex-direction: column;
    transition: opacity 0.5s 0.5s;
  }
  .pageLoading.complete {
    opacity: 0;
  }
  .pageLoading.complete .monster {
    transform: scale(0.01) rotate(360deg);
  }

  .loading {
    width: 2rem;
    height: .08rem;
    margin-top: .8rem;
    border-radius: .05rem;
    background-color: #fff;
    overflow: hidden;
    transition: 0.5s;
  }
  .loading .bar {
    background-color: #E55A54;
    width: 0%;
    height: 100%;
  }
</style>
