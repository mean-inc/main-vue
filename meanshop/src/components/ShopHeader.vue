<template>
  <header class="header">
    <div class="header__upper _qqq">
      <div class="header__upper_container _container">
        <div class="upper__location">
          <a href=""
            ><img src="@/assets/img/location.svg" alt="location" class="loc"
          /></a>
          <p
            @click="$emit('openModal')"
            style="cursor: pointer"
            class="upperText"
          >
            <!-- {{ city }} -->
            Ваш город
          </p>
        </div>
        <div class="asa">
          <div class="upper__delivery">
            <div class="line _upper">|</div>
            <p class="upperText">
              <a href="#" class="_grey">Доставка и оплата</a>
            </p>
            <p class="upperText">
              <a href="#" class="_grey">Где мой заказ?</a>
            </p>
          </div>
          <div class="upper__userProfile">
            <router-link to="/user-cabinet"
              ><img src="@/assets/img/userIcon.svg" alt="userIcon"
            /></router-link>
            <p class="upperText">
              <router-link to="/user-cabinet">Личный кабинет</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__upper _adapt _fixed">
      <div class="header__upper_container _container">
        <div class="main__logo _adapt">
          <a href="#/">Mean</a><a href="#/" class="blue">Shop</a>
        </div>
        <div class="main__shopper">
          <a href="#" class="shopper__link"
            ><img src="@/assets/img/icon_star_white.svg" alt="star"
          /></a>
          <a href="#" class="main__shopper"
            ><img src="@/assets/img/shopbasket_white.svg" alt="shopbasket"
          /></a>
          <div class="line">|</div>
          <a href="#" class="main__shopper"
            ><img src="@/assets/img/searchIcon_white.svg" alt="search"
          /></a>
          <div @click="burgOpen()" class="burger__adaptive">
            <span></span>
          </div>
        </div>
      </div>
      <!-- СУЧКА НЕ ЗАБУДЬ ВЕРНУТЬ ФЛАЖОК _ххх -->
      <div class="header__upper_adaptive _xxx">
        <div class="upper__location">
          <a href=""
            ><img src="@/assets/img/location.svg" alt="location" class="loc"
          /></a>
          <p class="upperText _fb">Ваш город</p>
        </div>
        <div class="upper__delivery">
          <p class="upperText _fb">
            <a href="#" class="_grey">Доставка и оплата</a>
          </p>
          <p class="upperText _fb">
            <a href="#" class="_grey">Где мой заказ?</a>
          </p>
        </div>
        <div class="upper__userProfile">
          <img src="@/assets/img/userIcon.svg" alt="userIcon" />
          <p class="upperText _fb">
            <router-link to="/user-cabinet">Личный кабинет</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="header__main _lll">
      <div class="header__main_container _container">
        <div class="main__logo">
          <a href="#">Mean</a><a href="#" class="blue">Shop</a>
        </div>
        <div class="asa">
          <!-- <div class="main__menubar"> -->
          <nav class="main__nav">
            <router-link to="/catalog-iphone">Iphone</router-link>
            <router-link to="/catalog-ipad">iPad</router-link>
            <router-link to="/catalog-mac">Mac</router-link>
            <router-link to="/catalog-watch">Watch</router-link>
            <router-link to="/catalog-accessories">Аксессуары</router-link>
            <router-link to="/catalog-airpods">AirPods</router-link>
          </nav>
          <!-- </div> -->
          <div class="main__shopper _qqq">
            <router-link to="/shopping-favorites"
              ><img src="@/assets/img/icon_star.svg" alt="star"
            /></router-link>
            <router-link to="/shopping-basket"
              ><img src="@/assets/img/shopbasket.svg" alt="shopbasket"
            /></router-link>
            <div class="line">|</div>
            <a href="#"
              ><img src="@/assets/img/searchIcon.svg" alt="search"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ShopHeader",
  props: {},
  data() {
    return {
      // userCity: "",
    };
  },
  methods: {
    burgOpen() {
      const menu = document.querySelector(".header__upper_adaptive");
      const burger = document.querySelector(".burger__adaptive");
      burger.classList.toggle("_scale");
      menu.classList.toggle("_xxx");
    },
    // showModal() {
    //   const modal = document.querySelector(".modal");
    //   modal.classList.toggle("_closed");
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/header_style.scss";
</style>
