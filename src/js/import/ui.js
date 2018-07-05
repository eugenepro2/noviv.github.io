import '../lib/selectize.min.js';
import '../lib/maskedinput.js';


//select
$('select').selectize();

//mask input
$('.phone').mask('+7 (999) 999-99-99');


//footer
$('.open-dropdown').on('click', function() {
  event.preventDefault();
  $('.footer__services').slideToggle();
  $(this).toggleClass('active');
});

$('.footer__services__block .open').on('click', function() {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).find('span').text('Развернуть');
  } else {
    $(this).find('span').text('Свернуть');
  }
  $(this).prev().slideToggle();
  $(this).toggleClass('active');
});
