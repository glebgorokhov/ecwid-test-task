import { createRouter, createWebHistory } from "vue-router";

import CategoryView from "@/views/CategoryView.vue";

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
      path: "/c/:slug",
      name: "category",
      component: CategoryView,
    },
  ],
});

export default router;
