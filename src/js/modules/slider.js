import Swiper from "swiper";

export const sliderChoose = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  slidesPerGroup: 1,
  spaceBetween: 40,
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});