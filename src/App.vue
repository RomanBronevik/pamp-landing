<template>
    <div id="app">
        <MainLayout>
            <header>
                <tabs></tabs>
            </header>
            <div class="columns category">
                <div class="category__item">
                    <b-radio v-model="radio"
                             native-value="diapers">
                        <img class="category__img" src="./assets/diapers-icon.png" alt="">
                        <span class="category__name">Подгузники</span>
                    </b-radio>
                </div>
                <div class="category__item">
                    <b-radio v-model="radio"
                             native-value="pants">
                        <img class="category__img" src="./assets/pants-icon.png" alt="">
                        <span class="category__name">Трусики</span>
                    </b-radio>
                </div>
            </div>
            <div class="columns">
                <div class="column products">
                    <div class="products__item">
                        <img class="products__img" src="./assets/0.png" alt="">
                        <h2 class="products__title">1.5-2.5 кг</h2>
                    </div>
                    <div class="products__item">
                        <img class="products__img" src="./assets/1.png" alt="">
                        <h2 class="products__title">2-5 кг</h2>
                    </div>
                    <div class="products__item">
                        <img class="products__img" src="./assets/2.png" alt="">
                        <h2 class="products__title">4-8 кг</h2>
                    </div>
                    <div class="products__item">
                        <img class="products__img" src="./assets/3.png" alt="">
                        <h2 class="products__title">6-10 кг</h2>
                    </div>
                    <div class="products__item">
                        <img class="products__img" src="./assets/4.png" alt="">
                        <h2 class="products__title">9-14 кг</h2>
                    </div>
                    <div class="products__item">
                        <img class="products__img" src="./assets/5.png" alt="">
                        <h2 class="products__title">11+ кг</h2>
                    </div>
                </div>
                <div class="column products products--mobile">
                    <hooper>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/0.png" alt="">
                                <h2 class="products__title">1.5-2.5 кг</h2>
                            </div>
                        </slide>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/1.png" alt="">
                                <h2 class="products__title">2-5 кг</h2>
                            </div>
                        </slide>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/2.png" alt="">
                                <h2 class="products__title">4-8 кг</h2>
                            </div>
                        </slide>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/3.png" alt="">
                                <h2 class="products__title">6-10 кг</h2>
                            </div>
                        </slide>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/4.png" alt="">
                                <h2 class="products__title">9-14 кг</h2>
                            </div>
                        </slide>
                        <slide>
                            <div class="products__item">
                                <img class="products__img" src="./assets/5.png" alt="">
                                <h2 class="products__title">11+ кг</h2>
                            </div>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
            </div>
            <div class="columns is-centered features">
                <div class="column is-4 features__item">
                    <hooper :transition=500>
                        <slide>
                            <h2 class="features__title">Комфорт</h2>
                            <span class="features__sub-title">Идеальный комфорт и защита</span>
                            <img class="features__img" src="./assets/feature-1-image.png" alt="">
                            <p class="features__text">Мягкие, как пух. Окружают малыша
                                непревзойдённой мягкостью</p>
                        </slide>
                        <slide>
                            <h2 class="features__title">Комфорт</h2>
                            <span class="features__sub-title">Идеальный комфорт и защита</span>
                            <img class="features__img" src="./assets/feature-1-image.png" alt="">
                            <p class="features__text">Мягкие, как пух. Окружают малыша
                                непревзойдённой мягкостью</p>
                        </slide>
                        <slide>
                            <h2 class="features__title">Комфорт</h2>
                            <span class="features__sub-title">Идеальный комфорт и защита</span>
                            <img class="features__img" src="./assets/feature-1-image.png" alt="">
                            <p class="features__text">Мягкие, как пух. Окружают малыша
                                непревзойдённой мягкостью</p>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
                <div class="column is-4 features__item">
                    <hooper :transition=500>
                        <slide>
                            <h2 class="features__title">Сухость</h2>
                            <span class="features__sub-title">Непревзойденная скорость впитывания</span>
                            <img class="features__img" src="./assets/2-feature-2-image-copy.png" alt="">
                            <p class="features__text">Воздушные каналы. Воздушная сухость
                                и защита до 12 часов</p>
                        </slide>
                        <slide>
                            <h2 class="features__title">Сухость</h2>
                            <span class="features__sub-title">Непревзойденная скорость впитывания</span>
                            <img class="features__img" src="./assets/2-feature-2-image-copy.png" alt="">
                            <p class="features__text">Воздушные каналы. Воздушная сухость
                                и защита до 12 часов</p>
                        </slide>
                        <slide>
                            <h2 class="features__title">Сухость</h2>
                            <span class="features__sub-title">Непревзойденная скорость впитывания</span>
                            <img class="features__img" src="./assets/2-feature-2-image-copy.png" alt="">
                            <p class="features__text">Воздушные каналы. Воздушная сухость
                                и защита до 12 часов</p>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
            </div>
            <div class="columns">
                <hooper autoPlay :transition=500 :playSpeed=5000>
                    <slide>
                        <div class="column testimonials">
                            <img src="./assets/stars.png" alt="" class="testimonials__img">
                            <h2 class="testimonials__title">Надежда, 14 мая 2017</h2>
                            <p class="testimonials__text">«Трусики Pampers просто супер!! Удобные в использовании,
                                мягкие, очень
                                хорошо впитывают влагу, кожа у ребенка в них дышит и нет опрелостей. Мы очень
                                довольны!!!»</p>
                        </div>
                    </slide>
                    <slide>
                        <div class="column testimonials">
                            <img src="./assets/stars.png" alt="" class="testimonials__img">
                            <h2 class="testimonials__title">Надежда, 14 мая 2017</h2>
                            <p class="testimonials__text">«Трусики Pampers просто супер!! Удобные в использовании,
                                мягкие, очень
                                хорошо впитывают влагу, кожа у ребенка в них дышит и нет опрелостей. Мы очень
                                довольны!!!»</p>
                        </div>
                    </slide>
                    <slide>
                        <div class="column testimonials">
                            <img src="./assets/stars.png" alt="" class="testimonials__img">
                            <h2 class="testimonials__title">Надежда, 14 мая 2017</h2>
                            <p class="testimonials__text">«Трусики Pampers просто супер!! Удобные в использовании,
                                мягкие, очень
                                хорошо впитывают влагу, кожа у ребенка в них дышит и нет опрелостей. Мы очень
                                довольны!!!»</p>
                        </div>
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
            </div>
        </MainLayout>
    </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import Tabs from '@/components/Tabs'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'app',
  components: {
    MainLayout,
    Tabs,
    Hooper,
    Slide,
    HooperPagination
  },
  data: () => ({
    radio: 'diapers'
  }),
  watch: {
    radio () {
      console.log(this.radio)
    }
  }
}
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/_all";
    @import "~bulma/sass/grid/columns";
    @import "~buefy/src/scss/utils/variables";
    @import "~buefy/src/scss/components/radio";

    body {
        margin: 0;
    }

    #app {
        font-family: "Montserrat", sans-serif;
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-bottom: 80px;
    }

    header {
        background: url("./assets/header_bg.png");
        height: 117px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .columns {
        margin: 0;
    }

    .products {
        padding-right: 0;
        &__title {
            color: #35a4aa;
            margin-top: 8px;
            margin-bottom: 0;
        }
        &__item {
            display: inline-block;
            &:hover img {
                transform: scale(1.05);
            }
        }
        &__img {
            user-drag: none;
            user-select: none;
            pointer-events: none;
            padding: 8px;
            transition: all .3s ease;
        }
        &--mobile {
            display: none;
        }
    }

    @media (max-width: 1024px) {
        .products {
            display: none;
        }
        .products--mobile {
            display: flex;
        }
        .products.products--mobile .hooper-track {
            align-items: center;
        }
    }

    .features {
        &__title {
            color: #35a4aa;
            font-size: 26px;
        }
        &__sub-title {
            color: #35a4aa;
            font-size: 20px;
        }
        &__img {
            pointer-events: none;
            user-select: none;
            -webkit-user-drag: none;
            display: block;
            margin: 20px auto;
        }
        &__text {
            color: #313131;
            max-width: 400px;
            margin-right: auto;
            margin-left: auto;
        }
    }

    .testimonials {
        &__title {
            font-size: 20px;
        }
        &__text {
            color: #4b4b4b;
        }
    }

    .hooper {
        height: auto;
        &-slide:focus {
            outline: none;
        }
        &-pagination {
            bottom: -20px;
        }
        &-indicator {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: lightgray;
            margin-right: 8px;
            &.is-active {
                background-color: gray;
            }
            &:hover {
                background-color: lightgray;
            }
            &:focus {
                outline: none;
            }
        }
    }

    .category {
        margin-top: 50px;
        justify-content: center;
        &__item {
            margin-bottom: 16px;
        }
        &__img {
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;
        }
        &__name {
            font-weight: bold;
            font-size: 20px;
            color: #35a4aa;
        }
    }

    .b-radio.radio:first-child {
        margin-right: 16px;
    }

    .b-radio.radio input[type=radio] + .check {
        border-color: #d7d7d7;
    }

    .b-radio.radio input[type=radio]:checked + .check {
        border-color: #d7d7d7;
    }

    .b-radio.radio input[type=radio] + .check:before {
        background: #35a4aa;
    }

    .b-radio.radio:hover input[type=radio] + .check {
        border-color: #d7d7d7;
    }
</style>
