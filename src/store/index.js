import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);
const state = {
  codeIsShow: false, //二维码
  countDownIsShow: false, //倒计时
  vote: {}, //投票数据
  popUpIsShow: false,//弹窗是否显示
  showData:{},//弹窗显示人像等内容的内容
  actCntIsShow:true,//活动内容是否显示
  actSetIsShow:false,//活动设置是否显示
  showDataScore:{},

}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
