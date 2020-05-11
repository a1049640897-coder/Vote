import {
  CHANGE_CODE_SHOW,
  REDUCTION_CODE_SHOW,
  CHANGE_CUT_DWN_SHOW,
  GET_VOTE_DATA,
  CHANGE_POP_SHOW,
  CHANGE_ACT_CNT_SHOW,
  CHANGE_ACT_SET_SHOW,
} from "./mutation-types";

const mutations = {
   [CHANGE_CODE_SHOW](state) {
      state.codeIsShow = !state.codeIsShow;
    },
    [REDUCTION_CODE_SHOW](state) {
      state.codeIsShow =false;
    },
  [CHANGE_CUT_DWN_SHOW](state){
     state.countDownIsShow = !state.countDownIsShow;
  },
  [GET_VOTE_DATA ](state,payload){
      state.vote =payload;
  },
  [CHANGE_POP_SHOW](state,payload){
     state.popUpIsShow =!state.popUpIsShow;
     state.showData = payload;
  },
  [CHANGE_ACT_CNT_SHOW](state,payload){
       state.actCntIsShow =payload;
  },
  [CHANGE_ACT_SET_SHOW](state,payload){
    state.actSetIsShow =payload;
  }
}

export default mutations