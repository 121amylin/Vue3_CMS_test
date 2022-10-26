import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import userManage from '../views/manage/userManage.vue'
// import newsManage from '../views/manage/newsManage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/manage',
      name: 'manage',
      component: () => import('../views/manage/ManageView.vue'),
      children: [
        {
          path: 'userManage',
          // component: userManage,
          component: () => import('../views/manage/userManage.vue')
        },
        {
          path: 'newsManage',
          // component: newsManage,
          component: () => import('../views/manage/newsManage.vue')
        },
      ],
    }
  ]
})

export default router
