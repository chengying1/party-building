import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views'
import newsList from '@/views/newsList'
import personal from '@/views/personal'
import newsListDetail from '@/views/newsListDetail'
import login from '@/views/login'
import newsListCommon from '@/views/newsListCommon'
import dsnow from '@/views/dsnow'
import zzsh from '@/views/zzsh'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/newsListDetail',
      name: 'newsListDetail',
      meta:{ title: index},
      component: newsListDetail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/newsListCommon',
      name: 'newsListCommon',
      component: newsListCommon
    },
    {
      path: '/dsnow',
      name: 'dsnow',
      component: dsnow
    },
    {
      path: '/zzsh',
      name: 'zzsh',
      component: zzsh
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('@/views/people')
    },
  ]
})
