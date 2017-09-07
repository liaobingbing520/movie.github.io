/**
 * Created by Administrator on 2017/7/22.
 */
import Vue from 'vue'
import App from './App.vue'
//引入全局样式mui
import './static/css/mui.min.css';
import './static/css/main.css';
//创建路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入mint-UI
import mint from 'mint-ui';
Vue.use(mint);
import '../node_modules/mint-ui/lib/style.css';
//引入封装的过滤器
import datefile from './common/datefile.js';
Vue.use(datefile);
//创建http
import resource from 'vue-resource';
Vue.use(resource);
//创建组件
import home from './component/home/home.vue';
import goods from './component/goods/goods.vue';
import setting from './component/setting/setting.vue';
import shopping from './component/shoppingcar/shopping.vue';
import news from './component/news/news.vue';
import newsinfo from './component/news/newsinfo.vue';
import imgcategory from './component/images/imgcategory.vue';
import images from './component/images/images.vue'
//创建路由表
 let router=new VueRouter({
     //切换路由以后的样式
     linkActiveClass:"mui-active",
     routes:[
         {path:'/home',component:home},
         {path:'/goods',component:goods},
         {path:'/setting',component:setting},
         {path:'/shopping',component:shopping},
         {path:'/news',component:news},
         {path:'/newsinfo/:id',component:newsinfo},
         {path:'/imgcategory',component:imgcategory},
         {path:'/images/:id',component:images}
     ]
 })


 new Vue({
     el:"#view",
     router:router,
     render:function (created) {
         return created(App);
     }
 })