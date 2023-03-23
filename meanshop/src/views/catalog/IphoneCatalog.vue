<template>
  <shop-header></shop-header>
  <main class="main">
    <div class="main__container _container _center">
      <div class="page__title">
        <h2>iPhone</h2>
      </div>
      <div class="catalog">
        <div class="catalog__filter">
          <div class="filter__filters _filter">
            <img src="@/assets/img/filter.svg" alt="svg filter" />
            <p>Фильтры</p>
          </div>
          <div class="filters__select _filter">
            <option value="popular">Популярные</option>
            <img src="@/assets/img/filter_select.svg" alt="svg select" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <shop-footer></shop-footer>
</template>
<script>
import ShopHeader from "@/components/ShopHeader.vue";
import ShopFooter from "@/components/ShopFooter.vue";
import allDevices from "@/vuex/allDevices";

export default {
  name: "IphoneCatalog",
  components: {
    ShopHeader,
    ShopFooter,
  },
  props: { allDevices },
  methods: {
    // aaa() {
    //   alert("aaaaa");
    // },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/body_style.scss";
@import "@/assets/styles/catalog-body_style.scss";
</style>
