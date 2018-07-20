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
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});

//home-advantages

var swiper = new Swiper('.swiper-advantages', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-advantages-next',
    prevEl: '.swiper-advantages-prev',
  },
  pagination: {
    el: '.swiper-pagination-advantages',
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px
    550: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is <= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
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
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
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
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});



//doctor--qualification

var swiper = new Swiper('.swiper-doctor--qualification', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-doctor--qualification-next',
    prevEl: '.swiper-doctor--qualification-prev',
  },
  pagination: {
    el: '.swiper-pagination-doctor--qualification',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    660: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});

//doctor--reviews

var swiper = new Swiper('.swiper-doctor--reviews', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-doctor--reviews-next',
    prevEl: '.swiper-doctor--reviews-prev',
  },
  pagination: {
    el: '.swiper-pagination-doctor--reviews',
    clickable: true,
  },
});


//services-page doc

var swiper = new Swiper('.swiper-doc', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-doc-next',
    prevEl: '.swiper-doc-prev',
  },
  breakpoints: {
    1090: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});


//article

var swiper = new Swiper('.swiper-article', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-article-next',
    prevEl: '.swiper-article-prev',
  },
  pagination: {
    el: '.swiper-pagination-article',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});


//action_foto

var swiper = new Swiper('.swiper-action_foto', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-action_foto-next',
    prevEl: '.swiper-action_foto-prev',
  },
  pagination: {
    el: '.swiper-pagination-action_foto',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    660: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});



//reward

var swiper = new Swiper('.swiper-reward', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-reward-next',
    prevEl: '.swiper-reward-prev',
  },
  pagination: {
    el: '.swiper-pagination-reward',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    660: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});



//share

var swiper = new Swiper('.swiper-share', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination-share',
    clickable: true,
  },
});
