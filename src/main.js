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
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
import { CountDown } from 'vant';
Vue.use(CountDown);
import { Button } from 'vant';
Vue.use(Button);
import { Popup } from 'vant';
Vue.use(Popup);
import { Divider } from 'vant';
Vue.use(Divider);
import { Circle } from 'vant';
Vue.use(Circle);
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
import { Card } from 'vant';
Vue.use(Card);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Overlay } from 'vant';
Vue.use(Overlay);
import { Slider } from 'vant';

Vue.use(Slider);
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);
import { Field } from 'vant';

Vue.use(Field);
import { Picker } from 'vant';

Vue.use(Picker);
import { RadioGroup, Radio } from 'vant';

Vue.use(Radio);
Vue.use(RadioGroup);
import { Icon } from 'vant';

Vue.use(Icon);
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);



import './mock'
import './assets/font/iconfont.css'
import 'lib-flexible'




//使用图片懒加载
Vue.use(VueLazyload,{
  error:'error',
  loading:require('./assets/img/common/loading.gif'),
});


//解决移动端300ms的延迟
FastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
