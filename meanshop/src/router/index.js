import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/catalog-iphone",
    name: "catalog-iphone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/catalog/IphoneCatalog.vue"
      ),
  },
  {
    path: "/catalog-ipad",
    name: "catalog-ipad",
    component: () => import("../views/catalog/IpadCatalog.vue"),
  },
  {
    path: "/catalog-mac",
    name: "catalog-mac",
    component: () => import("../views/catalog/MacCatalog.vue"),
  },
  {
    path: "/catalog-watch",
    name: "catalog-watch",
    component: () => import("../views/catalog/WatchCatalog.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
