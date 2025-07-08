import { createRouter, createWebHistory } from "vue-router";

import CartView from "@/views/CartView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ProductView from "@/views/ProductView.vue";
import ThankYouView from "@/views/ThankYouView.vue";

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
    {
      path: "/p/:slug-:id",
      name: "product",
      component: ProductView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: ThankYouView,
    },
  ],
});

export default router;
