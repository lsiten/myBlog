import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import test from '@/pages/home/test'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },

  ]
})
