import Vue from 'vue'
import VueRouter from 'vue-router'

//实现路由懒加载
const ActList=()=>import('views/actList/ActList');
const ActVote=()=>import('views/actVote/ActVote');
const AllRank=()=>import('views/allRank/AllRank');
const PgmManage = ()=>import('views/pgmManage/PgmManage');
const ActDetail=()=>import('views/actDetail/ActDetail');
const RwdVote=()=>import('views/rwdVote/RwdVote');
const CrtAct=()=>import('views/crtAct/CrtAct');
const QusNaire=()=>import('views/qusNaire/QusNaire');
const QusList=()=>import('views/qusNaire/QusList');
const QusBasicInfo=()=>import('views/qusNaire/QusBasicInfo');
const QusText=()=>import('views/qusNaire/QusText');


Vue.use(VueRouter);

  const routes = [
    {
      path:'/',
      redirect :'/actList'
    },
    {
      path: '/actList',
      component:ActList,
    },
    {
      path:'/actVote',
      component:ActVote,
    },
    {
      path:'/allRank',
      component:AllRank,
    },
    {
      path:'/pgmManage',
      component:PgmManage,
    },
    {
      path:'/actDetail',
      component:ActDetail,
    },
    {
      path:'/rwdVote',
      component:RwdVote,
    },
    {
      path:'/crtAct',
      component:CrtAct,
    },
    {
      path:'/qusNaire',
      component:QusNaire,
    },
    {
      path:'/qusList',
      component:QusList,
    },
    {
      path:'/qusBasicInfo',
      component:QusBasicInfo,
    },
    {
      path:'/qusText',
      component:QusText,
      children:[]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
