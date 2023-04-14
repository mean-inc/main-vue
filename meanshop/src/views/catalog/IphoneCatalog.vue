<template>
  <shop-header :selectedPhone="selectedPhone"></shop-header>
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
        <div class="filter__filter_filters">
          <!-- <div class="range_slider">
            <input
              type="range"
              min="299"
              max="4999"
              name="price_range"
              id="price_range"
            />
            <input
              type="range"
              min="299"
              max="4999"
              name="price_range"
              id="price_range"
            />
          </div> -->
        </div>
        <div class="catalog__line"></div>
        <div class="catalog__devices">
          <shop-modal v-if="shopModalVisible" @closeModal="closeModal">
            <p>Iphone</p>
          </shop-modal>
          <div class="catalog__devices_grid">
            <div
              v-for="phone in iphones"
              :key="phone.article"
              @click="openModal()"
              class="device"
            >
              <a :href="phone.link"></a>
              <img
                src="@/assets/img/icon_star.svg"
                alt="icon_star"
                class="item_favotites"
              />
              <img :src="phone.img" alt="item_img" class="catalog_item_img" />
              <!-- <img src="@/assets/img/img_example.jpg" alt="" /> -->
              <div class="item__name_and_price">
                <h3>{{ phone.name }}</h3>
                <a>{{ phone.cost }}</a>
              </div>
              <div class="item_clr">
                <p>Доступные цвета:</p>
                <div
                  class="item__colors"
                  :class="color"
                  v-for="color in phone.colors"
                  :key="color"
                ></div>
              </div>
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
import ShopModal from "@/components/modals/ShopModal.vue";
import "@/index";
import IphoneData from "C:/Users/andre/OneDrive/Рабочий стол/appleshop/main-vue/meanshop/db.json";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IphoneCatalog",
  components: {
    ShopHeader,
    ShopFooter,
    ShopModal,
  },
  props: {
    phone: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      iphones: IphoneData.Iphone,
      shopModalVisible: false,
      selectedPhone: null,
    };
  },
  computed: {
    ...mapGetters(["DEVICES"]),
  },
  mounted() {
    this.fetchImages();
    this.GET_DEVICES_FROM_API();
  },
  methods: {
    openModal(phoneName) {
      this.selectedPhone = phoneName;
      this.shopModalVisible = true;
    },
    closeModal() {
      this.shopModalVisible = false;
      this.selectedPhone = null;
    },
    ...mapActions(["GET_DEVICES_FROM_API"]),
    async fetchImages() {
      const response = await fetch("db.json"); // заменить на путь к JSON-файлу
      const data = await response.json();
      this.images = data;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/body_style.scss";
@import "@/assets/styles/catalog-body_style.scss";
</style>
