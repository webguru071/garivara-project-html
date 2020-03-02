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
