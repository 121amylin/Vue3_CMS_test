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
      path: '/animation',
      name: 'animation',
      component: () => import('../views/AnimationView.vue')
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/BasicView.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('../views/ConfigView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/DataView.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/NavigationView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedbackView.vue')
    },
    {
      path: '/others',
      name: 'others',
      component: () => import('../views/OthersView.vue')
    },
    {
      path: '/transitionView',
      name: 'transitionView',
      component: () => import('../views/TransitionView.vue')
    },
    {
      path: '/carouselOneWay',
      name: 'carouselOneWay',
      component: () => import('../views/CarouselOneWayView.vue')
    },
    {
      path: '/CarouselTwoWay',
      name: 'CarouselTwoWay',
      component: () => import('../views/CarouselTwoWayView.vue')
    },
    {
      path: '/computedView',
      name: 'computedView',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/GSAP',
      name: 'GSAP',
      component: () => import('../views/GSAPView.vue')
    },    
    {
      path: '/ScrollBar',
      name: 'ScrollBar',
      component: () => import('../views/ScrollBarView.vue')
    },


  ]
})

export default router
