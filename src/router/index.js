import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views'
import newsList from '@/views/newsList'
import personal from '@/views/personal'
import newsListDetail from '@/views/newsListDetail'
import login from '@/views/login'

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
      component: newsListDetail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
