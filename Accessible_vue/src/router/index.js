import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/carousel",
      name: "carousel",
      component: () => import("../views/CarouselView.vue"),
    },
    {
      path: "/carousel2",
      name: "carousel2",
      component: () => import("../views/CarouselView2.vue"),
    },
    {
      path: "/tabs",
      name: "tabs",
      component: () => import("../views/TabsView.vue"),
    },
    {
      path: "/modal",
      name: "modal",
      component: () => import("../views/ModalView.vue"),
    },
    {
      path: "/accordion",
      name: "accordion",
      component: () => import("../views/AccordionView.vue"),
    },
    {
      path: "/tooltips",
      name: "tooltips",
      component: () => import("../views/TooltipsView.vue"),
    },
  ],
});

export default router;
