// Main Slider Carousel
if ($(".banner-carousel").length) {
  $(".banner-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    loop: true,
    margin: 0,
    nav: false,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 6000,
    navText: [
      '<span class="fas fa-angle-left"></span>',
      '<span class="fas fa-angle-right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  });
}




$(".agent-items-wrapper").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  nav: false,
  items: 4,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    360: {
      items: 1
    },
    576: {
      items: 3
    },
    1920: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});

$(".customer-slider").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  nav: false,
  items: 4,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    360: {
      items: 1
    },
    576: {
      items: 1
    },
    1920: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});

$(".logo-wrapper").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  nav: false,
  items: 4,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    360: {
      items: 1
    },
    576: {
      items: 4
    },
    1920: {
      items: 6
    },
    1200: {
      items: 6
    }
  }
});
