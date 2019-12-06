import Vue from 'vue'
import Router from 'vue-router'
import Join from './../components/join/join'
import Login from './../components/login/login'
import Home from './../components/home/home'
import tabbar from './../components/tabBar/tabbar'
import shopping from './../components/shopping/shopping'
import list from './../components/list/list'
import mine from './../components/logining/logining'
import goodsNull from './../components/goods/goodsNull'
import goods from './../components/goods/goods'
import details from './../components/details/details'
import order from './../components/submint/order'
import pay from './../components/submint/pay'
import submit from './../components/submint/submit'
import baby from './../components/shop/shoptab'
import shouye from './../components/shop/shouye'
import searchblur from './../components/searchBlur/searchone'
import './../assets/font/font/PingFang Medium.ttf'
import loading from './../components/loading/loading'
import truemine from './../components/mine/mine'
import searchlist from './../components/searchlist/searchlist'
import nulllist from  './../components/list/nulllist'
import video from './../components/shop/video'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/video',
      component:video
    },
    {
      path:'/nulllist',
      component:nulllist
    },
    {
      path:'/searchlist',
      component:searchlist
    },
    {
      path:'/truemine',
      component:truemine
    },
    {
      path:'/loading',
      component:loading
    },
    {
      path:'/searchblur',
      component:searchblur
    },
    {
      path:'/shouye',
      component:shouye
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/join',
      component:Join
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/tabbar',
      component:tabbar
    },{
    path:'/shopping',
      component:shopping
    },{
    path:'/list',
      component:list
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:'/goodsNull',
      component:goodsNull
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/details',
      component:details
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/pay',
      component:pay
    },
    {
      path:'/submit',
      component:submit
    },{
    path:'/baby',
      component:baby
    }
  ]
})
