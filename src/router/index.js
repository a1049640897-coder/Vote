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
const NotFoundPage=()=>import('views/notFoundPage/NotFoundPage');


Vue.use(VueRouter);

  const routes = [
    { path: '*', component: NotFoundPage },
    {
      path:'/',
      redirect :'/actList',
    },
    {
      path: '/actList',
      name:'actList',
      component:ActList,
      meta:{
        title:'DEEP投票',
      }
    },
    {
      path:'/actVote/:id',
      component:ActVote,
      name:'actVote',
      meta:{
        title:'活动投票',
      }
    },
    {
      path:'/allRank',
      name:'allRank',
      component:AllRank,
      meta:{
        title:'总排行榜',
      }
    },
    {
      path:'/pgmManage',
      name:'pgmManage',
      component:PgmManage,
      meta:{
        title:'节目管理',
      }
    },
    {
      path:'/actDetail',
      name:'actDetail',
      component:ActDetail,
      meta:{
        title:'活动详情',
      }
    },
    {
      path:'/rwdVote',
      name:'rwdVote',
      component:RwdVote,
      meta:{
        title:'奖项投票'
      }
    },
    {
      path:'/crtAct',
      name:'crtAct',
      component:CrtAct,
      meta:{
        title:'创建活动',
        requiresAuth: true,
      }
    },
    {
      path:'/qusNaire',
      name:'qusNaire',
      component:QusNaire,
      meta:{
        title:'问卷调查',
        requiresAuth: true
      }
    },
    {
      path:'/qusList',
      name:'qusList',
      component:QusList,
      meta:{
        title:'问卷列表',
        requiresAuth: true,
      }
    },
    {
      path:'/qusBasicInfo',
      name:'qusBasicInfo',
      component:QusBasicInfo,
      meta:{
        title:'问卷基础信息',
        requiresAuth: true
      }
    },
    {
      path:'/qusText',
      name:'qusText',
      component:QusText,
      meta:{
        title:'问卷选项',
        requiresAuth: true
      }
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});




export default router
router.beforeEach((to,from,next)=>{
  if (to.meta.requiresAuth){
    next(vm => {

    })
  }else {
    next();
  }
})
