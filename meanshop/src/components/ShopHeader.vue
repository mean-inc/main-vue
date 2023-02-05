<template>
  <header class="header">
    <div class="header__upper">
      <div class="header__upper_container _container">
        <div class="upper__location">
          <a href=""
            ><img src="@/assets/img/location.svg" alt="location" class="loc"
          /></a>
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
            <a href="#"
              ><img src="@/assets/img/userIcon.svg" alt="userIcon"
            /></a>
            <p class="upperText"><a href="#">Мой личный кабинет</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__main">
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
          <div class="main__shopper">
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
  <main class="main">
    <div class="main__container _container">
      <div class="main__slider"></div>
      <div class="main__catalog_grid">
        <div class="item_iphone" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">iPhone</h3>
              <p class="item__price">от 39990 ₽</p>
            </div></a
          >
        </div>
        <div class="item_ipad" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">iPad</h3>
              <p class="item__price">от 29990 ₽</p>
            </div></a
          >
        </div>
        <div class="item_mac" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">Mac</h3>
              <p class="item__price">от 89990 ₽</p>
            </div></a
          >
        </div>
        <div class="item_watch" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">Watch</h3>
              <p class="item__price">от 19990 ₽</p>
            </div></a
          >
        </div>
        <div class="item_accessories" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">Аксессуары</h3>
              <p class="item__price">от 1990 ₽</p>
            </div></a
          >
        </div>
        <div class="item_airpods" id="catalog__item">
          <a href="#"
            ><img src="@/assets/img/img_example.jpg" alt="iPhone" />
            <div class="item__textArea">
              <h3 class="item__name">AirPods</h3>
              <p class="item__price">от 15990 ₽</p>
            </div></a
          >
        </div>
      </div>
      <div class="main__promo_banners_grid">
        <div class="banner_ipad _promo _black">
          <div class="promo__content">
            <h3 class="promo__title">iPad Pro</h3>
            <p class="promo__text">мегасила чипа Apple M1</p>
            <a href="#" class="promo__link">Подробнее ></a>
          </div>
          <div class="promo__img">
            <img src="#" alt="device" />
          </div>
        </div>
        <div class="banner_macbook _promo">
          <div class="promo__content">
            <h3 class="promo__title">MacBook Pro</h3>
            <p class="promo__text">мегасила профессионалов</p>
            <a href="#" class="promo__link">Подробнее ></a>
          </div>
          <div class="promo__img">
            <img src="#" alt="device" />
          </div>
        </div>
        <div class="banner_airpods _promo">
          <div class="promo__content">
            <h3 class="promo__title">AirPods</h3>
            <p class="promo__text">новые. с глубоким звучанием</p>
            <a href="#" class="promo__link">Подробнее ></a>
          </div>
          <div class="promo__img">
            <img src="#" alt="device" />
          </div>
        </div>
        <div class="banner_watch _promo _black">
          <div class="promo__content">
            <h3 class="promo__title">Watch</h3>
            <p class="promo__text">покажут будущее</p>
            <a href="#" class="promo__link">Подробнее ></a>
          </div>
          <div class="promo__img">
            <img src="#" alt="device" />
          </div>
        </div>
      </div>
      <section class="section__power _container">
        <h2 class="power__title">В чём сила Apple?</h2>
        <div class="power__container">
          <div class="power__img">
            <img src="../assets/img/img_example.jpg" alt="pic" />
          </div>
          <div class="power__content">
            <div class="content__1 _active">
              <div class="horizontal__line"></div>
              <div class="value__title">
                <img
                  src="@/assets/img/apple.svg"
                  class="value__img"
                  alt="apple"
                />
                <h4 class="value__title">iOS 15. На связи. В моменте.</h4>
              </div>
              <p class="value__text">
                В iOS 15 множество новых функций для общения, навигации в
                окружающем мире, лучшей концентрации на главном и использования
                мощных средств искусственного интеллекта. Ваш iPhone станет ещё
                способнее.
              </p>
              <a href="#" class="value__link">Узнать больше</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "ShopHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/header_style.scss";
@import "@/assets/styles/body_style.scss";
</style>
