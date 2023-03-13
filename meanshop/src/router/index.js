import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  // CATALOGGGGGGG
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
  {
    path: "/catalog-accessories",
    name: "catalog-accessories",
    component: () => import("../views/catalog/AccessoriesCatalog.vue"),
  },
  {
    path: "/catalog-airpods",
    name: "catalog-airpods",
    component: () => import("../views/catalog/AirpodsCatalog.vue"),
  },
  // SHOPINGGGGGGGG
  {
    path: "/shopping-favorites",
    name: "shopping-favorites",
    component: () => import("../views/shopping/FavoritesPage.vue"),
  },
  {
    path: "/shopping-basket",
    name: "shopping-basket",
    component: () => import("../views/shopping/ShopbasketPage.vue"),
  },
  // USER (UPPER HEADER)
  {
    path: "/user-cabinet",
    name: "user-cabinet",
    component: () => import("../views/user-info/UserCabinet.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
