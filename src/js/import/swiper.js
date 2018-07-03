import Swiper from 'swiper';


//home-shares
var swiper = new Swiper('.swiper-shares', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-shares-next',
    prevEl: '.swiper-shares-prev',
  },
  pagination: {
    el: '.swiper-pagination-shares',
    clickable: true,
  },
});
