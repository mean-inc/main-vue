<template>
  <div class="home">
    <ShopHeader />
    <main class="main">
      <div class="main__slider"></div>
      <div class="main__container _container">
        <div class="main__catalog_grid">
          <div class="item_iphone" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/iphone__img.jpg"
                class="item__img"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">iPhone</h3>
                <p class="item__price">от 39990 ₽</p>
              </div></a
            >
          </div>
          <div class="item_ipad" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/ipad__img.jpg"
                class="item__img _ipad"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">iPad</h3>
                <p class="item__price">от 29990 ₽</p>
              </div></a
            >
          </div>
          <div class="item_mac" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/mac_img.png"
                class="item__img"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">Mac</h3>
                <p class="item__price">от 89990 ₽</p>
              </div></a
            >
          </div>
          <div class="item_watch" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/watch_img.png"
                class="item__img _watch"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">Watch</h3>
                <p class="item__price">от 19990 ₽</p>
              </div></a
            >
          </div>
          <div class="item_accessories _pad" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/accessories_img.jpg"
                class="item__img"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">Аксессуары</h3>
                <p class="item__price">от 1990 ₽</p>
              </div></a
            >
          </div>
          <div class="item_airpods" id="catalog__item">
            <a href="#" class="dddd"
              ><img
                src="@/assets/img/airpods_img.jpg"
                class="item__img"
                alt="iPhone"
              />
              <div class="item__textArea">
                <h3 class="item__name">AirPods</h3>
                <p class="item__price">от 15990 ₽</p>
              </div></a
            >
          </div>
        </div>
        <div class="main__promo_banners_grid">
          <div class="banner_ipad _promo _white">
            <div class="promo__content">
              <h3 class="promo__title">iPad Pro</h3>
              <p class="promo__text">мегасила чипа Apple M1</p>
              <p class="promo__link">Подробнее ></p>
            </div>
            <div class="promo__img">
              <img src="@/assets/img/ipadpro__promo.jpg" alt="device" />
            </div>
          </div>
          <div class="banner_macbook _promo _black">
            <div class="promo__content">
              <h3 class="promo__title">MacBook Pro</h3>
              <p class="promo__text">суперсила профессионалов</p>
              <p class="promo__link">Подробнее ></p>
            </div>
            <div class="promo__img">
              <img src="@/assets/img/macbook__promo.png" alt="device" />
            </div>
          </div>
          <div class="banner_airpods _promo _black">
            <div class="promo__content">
              <h3 class="promo__title">AirPods</h3>
              <p class="promo__text">новые. с глубоким звучанием</p>
              <p class="promo__link">Подробнее ></p>
            </div>
            <div class="promo__img">
              <img src="@/assets/img/airpods__promo.png" alt="device" />
            </div>
          </div>
          <div class="banner_watch _promo _white">
            <div class="promo__content">
              <h3 class="promo__title">Watch</h3>
              <p class="promo__text">покажут будущее</p>
              <p class="promo__link">Подробнее ></p>
            </div>
            <div class="promo__img">
              <img src="@/assets/img/watch__promo.png" alt="device" />
            </div>
          </div>
        </div>
        <!-- <section class="section__power _container">
          <h2 class="power__title">В чём сила Apple?</h2>
          <div class="power__container">
            <div class="power__img">
              <img src="../assets/img/img_example.jpg" alt="pic" />
            </div>
            <div class="power__content_container">
              <div class="power__content _ios">
                <div class="content__1">
                  <div class="horizontal__line"></div>
                  <div class="value__title">
                    <img
                      src="@/assets/img/apple.svg"
                      class="value__img"
                      alt="apple"
                    />
                    <h4 class="value__title">iOS 15. На связи. В моменте.</h4>
                  </div>
                  <div class="dispatch">
                    <p class="value__text">
                      В iOS 15 множество новых функций для общения, навигации в
                      окружающем мире, лучшей концентрации на главном и
                      использования использования использования использования
                      интеллекта. Ваш iPhone станет ещё способнее.
                    </p>
                    <a href="#" class="value__link">Узнать больше</a>
                  </div>
                </div>
              </div>
              <div class="power__content _konf">
                <div class="content__1">
                  <div class="horizontal__line"></div>
                  <div class="value__title">
                    <img
                      src="@/assets/img/apple.svg"
                      class="value__img"
                      alt="apple"
                    />
                    <h4 class="value__title">Конфиденциальность</h4>
                  </div>
                  <div class="dispatch _none">
                    <p class="value__text">
                      Только вам решать,кому будут доступны ваши данные.
                    </p>
                    <a href="#" class="value__link">Узнать больше</a>
                  </div>
                </div>
              </div>
              <div class="power__content _move">
                <div class="content__1 _active">
                  <div class="horizontal__line"></div>
                  <div class="value__title">
                    <img
                      src="@/assets/img/apple.svg"
                      class="value__img"
                      alt="apple"
                    />
                    <h4 class="value__title">
                      Перейти на iPhone очень просто.
                    </h4>
                  </div>
                  <div class="dispatch _none">
                    <p class="value__text">
                      Переходите на iPhone со смартфона Android? Это легко:
                      достаточно просто включить новый iPhone. Вам поможет
                      пошаговое руководство и приложение для переноса данных.
                    </p>
                    <a href="#" class="value__link">Узнать больше</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </main>
    <ShopFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopHeader from "@/components/ShopHeader.vue";
import ShopFooter from "@/components/ShopFooter.vue";

export default {
  name: "MainPage",
  components: {
    ShopHeader,
    ShopFooter,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/body_style.scss";
</style>
