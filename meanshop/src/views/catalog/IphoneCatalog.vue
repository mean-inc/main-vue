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
        <div class="catalog__devices">
          <div class="catalog__devices_grid">
            <div v-for="item in DEVICES" :key="item.article" class="device">
              <img
                src="@/assets/img/icon_star.svg"
                alt="icon_star"
                class="item_favotites"
              />
              <img :src="item.img" alt="item_img" />
              <!-- <img src="@/assets/img/img_example.jpg" alt="" /> -->
              <div class="item__name_and_price">
                <h3>{{ item.name }}</h3>
                <a>{{ item.cost }}</a>
              </div>
              <p>Доступные цвета:</p>
            </div>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IphoneCatalog",
  components: {
    ShopHeader,
    ShopFooter,
  },
  props: {},
  computed: {
    ...mapGetters(["DEVICES"]),
  },
  methods: {
    ...mapActions(["GET_DEVICES_FROM_API"]),
  },
  mounted() {
    this.GET_DEVICES_FROM_API();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/body_style.scss";
@import "@/assets/styles/catalog-body_style.scss";
</style>
