
import {
  CHANGE_CODE_SHOW,
  REDUCTION_CODE_SHOW,
  CHANGE_CUT_DWN_SHOW,
  GET_VOTE_DATA,
  CHANGE_POP_SHOW,
  CHANGE_ACT_CNT_SHOW,
  CHANGE_ACT_SET_SHOW
} from "./mutation-types";

const actions ={
  //改变二维码显示状态
  [CHANGE_CODE_SHOW](context){
    context.commit(CHANGE_CODE_SHOW);
  },
  //还原最初二维码显示状态
  [REDUCTION_CODE_SHOW](context){
    context.commit(REDUCTION_CODE_SHOW);
  },
  //改变倒计时显示状态
  [CHANGE_CUT_DWN_SHOW](context) {
    context.commit(CHANGE_CUT_DWN_SHOW);
  },
  //获取
  [GET_VOTE_DATA](context,payload){
    context.commit(GET_VOTE_DATA,payload);
  },
  //改变弹窗状态
  [CHANGE_POP_SHOW](context,payload){
    context.commit(CHANGE_POP_SHOW,payload);
  },
  //改变活动内容显示状态
  [CHANGE_ACT_CNT_SHOW](context,payload){
    context.commit(CHANGE_ACT_CNT_SHOW,payload);
  },
  //改变活动设置的显示状态
  [CHANGE_ACT_SET_SHOW](context,payload){
    context.commit(CHANGE_ACT_SET_SHOW,payload);
  }
}

export default actions;