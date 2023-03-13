<template>
  <shop-header></shop-header>
  <main class="main">
    <div class="main__container _container _center">
      <div class="page__title">
        <h2>Избранные товары</h2>
      </div>
      <div class="catalog"></div>
    </div>
  </main>
  <shop-footer></shop-footer>
</template>

<script>
import ShopHeader from "@/components/ShopHeader.vue";
import ShopFooter from "@/components/ShopFooter.vue";

export default {
  name: "ShopbasketPage",
  components: {
    ShopHeader,
    ShopFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/body_style.scss";
@import "@/assets/styles/catalog-body_style.scss";
</style>
