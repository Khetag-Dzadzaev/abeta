/* "use strict"
//==========================================
const swiper = new Swiper('.swiper', {

    //! Основные настройки
    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
    speed: 500, // скорость переключения слайдов
    effect: 'slider', // cards, coverflow, flip, fade, cube
    //initialSlide: 1, // Начинаем со 2 слайдера
    freeMode: true, // можно перетаскивать как ленту
    slidesPerView: 3, // кол-во активных слайдов
    centeredSlides: true, // центрирование слайдов

    //! Кнопки вперед и назад
    navigation: {
        nextEl: '.catalog_right',
        prevEl: '.catalog_arrow__button',
    },

    //! Автоматическое перелистывание
    // autoplay: {
    //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
    // },
}); */

var swiper1 = new Swiper(document.getElementById("catalog-door"), {
  spaceBetween: 30,
  initialSlide: 1,
  navigation: {
    nextEl: ".catalog__arrow_right",
    prevEl: ".catalog__arrow_left  ",
  },
  breakpoints: {
    1800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

let swiper2 = new Swiper(document.getElementById("accessories"), {
  spaceBetween: 30,
  initialSlide: 3,
  direction: "horizontal",
  navigation: {
    nextEl: ".catalog__accessories_right",
    prevEl: ".catalog__accessories_left",
  },
  slidesPerView: 1,

  breakpoints: {
    1776: {
      slidesPerView: 6,
    },
    1450: {
      slidesPerView: 5,
      centeredSlides: true,
    },

    1250: {
      slidesPerView: 4,
    },

    800: {
      slidesPerView: 3,
      centeredSlides: true,
    },

    500: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
});

let swiper3 = new Swiper(document.getElementById("implemented_project"), {
  spaceBetween: 30,
  initialSlide: 4,

  navigation: {
    nextEl: ".implemented__arrow-right",
    prevEl: ".implemented__arrow-left ",
  },
  breakpoints: {
    // when window width is >= 320px
    1776: {
      slidesPerView: 7,
      centeredSlides: true,
    },
    // when window width is >= 480px
    1516: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    1259: {
      slidesPerView: 5,
      centeredSlides: true,
    },

    891: {
      slidesPerView: 4,
    },

    583: {
      slidesPerView: 3,
      centeredSlides: true,
    },

    320: {
      slidesPerView: 2,
    },
  },
});

let swiper = new Swiper(document.getElementById("heroswiper"), {
  direction: "horizontal",
  loop: true,
  speed: 500,
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".hero__arrow-right ",
    prevEl: ".hero__arrow",
  },
});

let swiper4 = new Swiper(document.getElementById("penswiper"), {
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    650: {
      slidesPerView: 4,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
    },

    500: {
      slidesPerView: 3,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
    },

    320: {
      slidesPerView: 2,
      loop: true,
      initialSlide: 2,
    },
  },

  navigation: {
    nextEl: ".creat__choice-accessories-button_right",
    prevEl: ".creat__choice-accessories-button_left ",
  },
});
