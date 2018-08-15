import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import '@fancyapps/fancybox';


$('textarea')
  .focus(function() { 
    $(this).addClass('active'); 
  })
  .blur(function() { 
    $(this).removeClass('active'); 
  });



//якорь
$('.scroll').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});




//menu open
$('.menu-open').on('click', function() {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  $('.menu').fadeToggle();
  $('body').toggleClass('active');
});

//select
$('select').selectize();

//mask input
$('.phone').mask('+7 (999) 999-99-99');


//footer
$('.open-dropdown').on('click', function(event) {
  event.preventDefault();
  $('.footer__services').slideToggle();
  $(this).toggleClass('active');
  let scroll = $(this).offset().top;
  $('html, body').animate({ scrollTop: scroll - 40}, 500, 'swing');
});

$('.footer__services__block .open').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).find('span').text('Развернуть');
  } else {
    $(this).find('span').text('Свернуть');
  }
  $(this).prev().slideToggle();
  $(this).toggleClass('active');
});


//prices-service
$('[data-service-list]').on('click', function(event) {
  event.preventDefault();
  $(this).prev().toggleClass('active');
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).find('span').text('Свернуть цены');
  } else {
    $(this).find('span').text('Развернуть цены');
  }
});
