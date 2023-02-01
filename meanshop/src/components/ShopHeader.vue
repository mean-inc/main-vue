<template>
  <header class="header">
    <div class="header__upper">
      <div class="header__upper_container _container">
        <div class="upper__location">
          <img src="@/assets/img/location.svg" alt="location" class="loc" />
          <p class="upperText"><a href="#">Ваш город</a></p>
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
            <img src="@/assets/img/userIcon.svg" alt="userIcon" />
            <p class="upperText"><a href="#">Мой личный кабинет</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__main">
      <div class="header__main_container _container">
        <div class="main__logo"><a href="#">MeanShop</a></div>
        <div class="main__menubar">
          <nav class="main__nav">
            <a href="#" class="nav_link">iPhone</a>
            <a href="#" class="nav_link">iPad</a>
            <a href="#" class="nav_link">Mac</a>
            <a href="#" class="nav_link">Watch</a>
            <a href="#" class="nav_link">Аксессуары</a>
            <a href="#" class="nav_link">AirPods</a>
          </nav>
        </div>
        <div class="main__shopper">
          <img src="@/assets/img/icon_star.svg" alt="star" />
          <img src="@/assets/img/shopbasket.svg" alt="shopbasket" />
          <div class="line">|</div>
          <img src="@/assets/img/searchIcon.svg" alt="search" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ShopHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/header_style.scss";
</style>
