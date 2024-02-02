import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import '@fancyapps/fancybox';
import '../lib/jquery.inputmask.js';

$(document).ready(function() {

  $('#date').inputmask({
    mask: 'D/M',
    placeholder: 'дд.мм',
    definitions: {
      'M': {
        validator: function(chrs, buffer, pos, strict, opts) {
          var valExp = new RegExp('0[1-9]|1[0-2]');
          return valExp.test(chrs);
        },
        cardinality: 2,
        prevalidator: [
          { validator: '[01]', cardinality: 1 },
          { validator: '0[1-9]', cardinality: 2 },
          { validator: '1[012]', cardinality: 2 },
        ]
      },
      'D': {
        validator: function(chrs, buffer, pos, strict, opts) {
          var valExp2 = new RegExp('0[1-9]|[12][0-9]|3[01]');
          return valExp2.test(chrs);
        },
        cardinality: 2,
        prevalidator: [
          { validator: '[0-3]', cardinality: 1 },
          { validator: '0[1-9]', cardinality: 2 },
          { validator: '(1|2)[0-9]', cardinality: 2 },
          { validator: '3[01]', cardinality: 2 },
        ]
      },
    }
  });

});



// $('#date').inputmask('99-9999999'); 
//mask input
$('.phone').mask('+7 (999) 999-99-99');
//mask input
// $('#date').mask('99/99/2099');





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
  if($(this).prev().hasClass('none')) {
    if($(this).hasClass('active')) {
      $(this).find('span').text('Expand');
    } else {
      $(this).find('span').text('Collapse');
    }
    $(this).prev('.none').slideToggle();
    $(this).toggleClass('active');
  }
});


//prices-service
$('[data-service-list]').on('click', function(event) {
  event.preventDefault();
  $(this).prev().toggleClass('active');
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).find('span').text('Collapse price');
  } else {
    $(this).find('span').text('Expand price');
  }
});
