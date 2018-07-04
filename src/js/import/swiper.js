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


//gallery

var swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-gallery-next',
    prevEl: '.swiper-gallery-prev',
  },
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
  },
});



//reviews

var swiper = new Swiper('.swiper-reviews', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  pagination: {
    el: '.swiper-pagination-reviews',
    clickable: true,
  },
});
