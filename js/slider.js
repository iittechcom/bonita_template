$(document).ready(function () {
  $(".banner__slide").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    // slideTransition: "ease-in-out",
    navSpeed: 1000,
    // animateOut: "animate__fadeOut",
    // animateIn: "animate__fadeIn",
    responsiveClass: true,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>',
    ],
  });

  $(".serd-slide").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,

    navSpeed: 1000,
    responsiveClass: true,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>',
    ],
  });

  $(".stayus-img").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 600,
    navSpeed: 1000,
    responsiveClass: true,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>',
    ],
  });

  $(".stayus-slide").owlCarousel({
    loop: true,
    nav: false,
    margin: 25,
    autoplayTimeout: 4000,
    autoplaySpeed: 600,
    navSpeed: 1000,
    responsiveClass: true,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        dots: true,
        mouseDrag: true,

      },
      640: {
        autoplay: true,
        dots: true,
        mouseDrag: true,
        items: 2,

      },
      1000: {
        autoplay: false,
        dots: false,
        mouseDrag: false,
        items: 2
      }
    }
  });

  $(".offer__slide").owlCarousel({
    items: 2,
    margin: 5,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 600,
    navSpeed: 1000,
    responsiveClass: true,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      640: {
        items: 1,
        nav: false,
      },
      1000: {
        nav: true,
        items: 2
      },
      1600: {
        nav: true,
        items: 3
      }
    }
  });

  $(".img-slide").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 600,
    navSpeed: 600,
    responsiveClass: true,
    navContainer: ".nav-container",
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        stagePadding: 0,
      },
      640: {
        stagePadding: 70,
      },
      1000: {
        stagePadding: 150,
      },
      1600: {
        stagePadding: 200,
      }
    }
  });

  $(".stay-slide").owlCarousel({
    margin: 30,
    nav: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 600,
    navSpeed: 600,
    responsiveClass: true,
    navContainer: ".nav-container",
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
      },
      640: {
        items: 2,
        loop: true,
        dots: true,
        autoplay: true,
      },
      1000: {
        items: 3,
        loop: false,
        dots: false,
        autoplay: false,
      },
      1600: {
        items: 3,
        loop: false,
        dots: false,
        autoplay: false,
      }
    }
  });

  $('.gallery-avatar').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 800,
    navSpeed: 800,
    animateOut: "animate__fadeOut",
    animateIn: "animate__fadeIn",
    URLhashListener: true,
    startPosition: 'URLHash'
  })
  $('.gallery-thumb').owlCarousel({
    loop: true,
    margin: 15,
    center: true,
    nav: true,
    dots: false,
    URLhashListener: true,
    navText: ['<span class="fas fa-chevron-left "></span>', '<span class="fas fa-chevron-right "></span>'],
    responsive: {
      0: {
        items: 3,
        stagePadding: 0,
      },
      600: {
        items: 3,
        stagePadding: 60,
      },
      1000: {
        items: 3,
        stagePadding: 60,
      }
    }
  })

});

