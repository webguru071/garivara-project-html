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

/*----------------------------------------
         Agent Slider
----------------------------------------*/

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
      items: 2
    },
    1920: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});

/*----------------------------------------
         Customers Slider
----------------------------------------*/

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
/*----------------------------------------
           Logo Slider
----------------------------------------*/
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
    320: {
      items: 2
    },
    360: {
      items: 2
    },
    480: {
      items: 3
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
/*----------------------------------------
            Video Plugin (About Page)
----------------------------------------*/

var $iframe = $("iframe"),
  $videoLink = $(".video-link"),
  playerTemplate =
    '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

$videoLink.on("click", function(e) {
  var localTemplate = "",
    videoWidth = parseInt($(this).data("width")),
    videoHeight = parseInt($(this).data("height")),
    videoAspect = (videoHeight / videoWidth) * 100,
    // elements
    $player = null,
    $video = null,
    $close = null,
    $iframe = null;

  e.preventDefault();

  localTemplate = playerTemplate.replace(
    "{{iframevideo}}",
    $(this).prop("href")
  );

  $player = $(localTemplate);

  $player.find(".video-filler").css("padding-top", videoAspect + "%");

  $close = $player.find(".video-close").on("click", function() {
    $(this)
      .off()
      .closest(".player")
      .hide()
      .remove();
  });

  $player.appendTo("body").addClass("js--show-video");
});

/*----------------------------------------
        AccordionPlugin (About Page)
 ----------------------------------------*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*------------------------------------------------------------
 *  search
 * ------------------------------------------------------ */
$(function() {
  $('a[href="#search"]').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  //Do not include! This prevents the form from submitting for DEMO purposes only!
  $("form").submit(function(event) {
    event.preventDefault();
    return false;
  });
});

$(document).ready(function() {
  $("#bar").click(function() {
    $("#nav-toggle").toggle();
  });
});

//Ride Sharing Banner Slider
if ($(".ride-slider-carousel").length) {
  $(".ride-slider-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 6000,
    navText: [
      "<i class='fas fa-arrow-circle-left'></i>",
      "<i class='fas fa-arrow-circle-right'></i>"
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

//Hire Me Slider
$(".owl-hire-free").owlCarousel({
  loop: true,
  margin: 30,
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
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
});
$(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

$(function() {
  var output = document.querySelectorAll("#output-range-slider-1")[0];

  $(document).on("input", 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });

  $("input[type=range]").rangeslider({
    polyfill: false
  });
});

$(function() {
  var output = document.querySelectorAll("#output-range-slider-2")[0];

  $(document).on("input", 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });

  $("input[type=range]").rangeslider({
    polyfill: false
  });
});
