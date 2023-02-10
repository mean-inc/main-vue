<template>
  <header class="header">
    <div class="header__upper _qqq">
      <div class="header__upper_container _container">
        <div class="upper__location">
          <a href=""
            ><img src="@/assets/img/location.svg" alt="location" class="loc"
          /></a>
          <p class="upperText">
            <a href="#">Ваш город</a>
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
            <a href="#"
              ><img src="@/assets/img/userIcon.svg" alt="userIcon"
            /></a>
            <p class="upperText"><a href="#">Мой личный кабинет</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__upper _adapt _fixed">
      <div class="header__upper_container _container">
        <div class="main__logo _adapt">
          <a href="#">Mean</a><a href="#" class="blue">Shop</a>
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
          <p class="upperText _fb">
            <a href="#">Ваш город</a>
          </p>
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
          <a href="#"><img src="@/assets/img/userIcon.svg" alt="userIcon" /></a>
          <p class="upperText _fb"><a href="#">Мой личный кабинет</a></p>
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
            <a href="#" class="nav_link">iPhone</a>
            <a href="#" class="nav_link">iPad</a>
            <a href="#" class="nav_link">Mac</a>
            <a href="#" class="nav_link">Watch</a>
            <a href="#" class="nav_link">Аксессуары</a>
            <a href="#" class="nav_link">AirPods</a>
          </nav>
          <!-- </div> -->
          <div class="main__shopper _qqq">
            <a href="#" class="shopper__link"
              ><img src="@/assets/img/icon_star.svg" alt="star"
            /></a>
            <a href="#" class="main__shopper"
              ><img src="@/assets/img/shopbasket.svg" alt="shopbasket"
            /></a>
            <div class="line">|</div>
            <a href="#" class="main__shopper"
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
  methods: {
    burgOpen() {
      const menu = document.querySelector(".header__upper_adaptive");
      const burger = document.querySelector(".burger__adaptive");
      burger.classList.toggle("_scale");
      menu.classList.toggle("_xxx");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/header_style.scss";
</style>
