import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import cate from '@/pages/cate/cate'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cate/:id',
      name: 'cate',
      component: cate
    },

  ]
})
