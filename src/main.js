// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import swiper from 'swiper'
import './../node_modules/swiper/dist/css/swiper.css'
import 'jquery'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(Vuex);
const store = new Vuex.Store({
  // 定义状态
  state: {
  },
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
var clientWidth = document.documentElement.clientWidth;
var timer;
function setRem() {
  clientWidth = document.documentElement.clientWidth;
  var nowPX = clientWidth / 375 * 100;
  document.documentElement.style.fontSize = nowPX + 'px';
}
clientWidth !== 375 && setRem();
window.addEventListener(supportsOrientationChange, function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    setRem();
  }, 300);
}, false);
