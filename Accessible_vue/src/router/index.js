import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/carousel',
      name: 'carousel',
      component: () => import('../views/CarouselView.vue')
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/tabsView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/ModalView.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue')
    }
  ]
})

export default router
