import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:()=>import('@/view/index')
    },
    {
      path: '/index',
      name: 'index',
      component:()=>import('@/view/index')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('@/view/login')
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component:()=>import('@/view/zhuce')
    },
    {
      path: '/wode',
      name: 'wode',
      component:()=>import('@/view/wode')
    },
    {
      path: '/renwu',
      name: 'renwu',
      component:()=>import('@/view/renwu')
    },
    {
      path: '/huiyi',
      name: 'huiyi',
      component:()=>import('@/view/huiyi')
    },
    {
      path: '/huiYiNeiRong',
      name: 'huiYiNeiRong',
      component:()=>import('@/view/huiYiNeiRong')
    },
    {
      path: '/lindexLishi',
      name: 'lindexLishi',
      component:()=>import('@/view/lindexLishi')
    },
    {
      path: '/lishiXiangqing',
      name: 'lishiXiangqing',
      component:()=>import('@/view/lishiXiangqing')
    },
    {
      path: '/muban',
      name: 'muban',
      component:()=>import('@/view/muban')
    },
    {
      path: '/renwu',
      name: 'renwu',
      component:()=>import('@/view/renwu')
    },
    {
      path: '/renwuXiangqing',
      name: 'renwuXiangqing',
      component:()=>import('@/view/renwuXiangqing')
    },
    {
      path: '/renwuXiangqing2',
      name: 'renwuXiangqing2',
      component:()=>import('@/view/renwuXiangqing2')
    },
    {
      path: '/wode-banben',
      name: 'wode-banben',
      component:()=>import('@/view/wode-banben')
    },
    {
      path: '/wode-chidao',
      name: 'wode-chidao',
      component:()=>import('@/view/wode-chidao')
    },
    {
      path: '/wode-gerenxinxi',
      name: 'wode-gerenxinxi',
      component:()=>import('@/view/wode-gerenxinxi')
    },
    {
      path: '/wode-rizhi',
      name: 'wode-rizhi',
      component:()=>import('@/view/wode-rizhi')
    },
    {
      path: '/wode-zhouzhi',
      name: 'wode-zhouzhi',
      component:()=>import('@/view/wode-zhouzhi')
    }
  ]
})
