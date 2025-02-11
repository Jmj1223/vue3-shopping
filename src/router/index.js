import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'layout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'category/sub/:id',
          name: 'SubCategory',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: 'cartlist',
          name: 'CartList',
          component: () => import('@/views/CartList/index.vue')
        }
      ]
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
