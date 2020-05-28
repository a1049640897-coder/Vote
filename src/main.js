import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";
import FastClick from 'fastclick'
import https from "./api/https";
import apis from "./api/apis";
Vue.config.productionTip = false;
Vue.prototype.$http = https;
Vue.prototype.$api = apis;


import './mock'
import './assets/font/iconfont.css'
import 'lib-flexible'




//使用图片懒加载
Vue.use(VueLazyload,{
  error:'error',
  loading:require('./assets/img/common/loading.gif'),
  attempt: 3 //  加载错误后最大尝试次数 默认值:3
});


//解决移动端300ms的延迟
FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
