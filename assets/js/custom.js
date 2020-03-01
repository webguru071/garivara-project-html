(function($) {
  "use strict";

  var digiciaApp = {
    /* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
    mobile_menu: function() {
      var mobilesearch = $(
        ".site-header .navigation-area .header-navigation-right"
      )
        .clone()
        .appendTo(".mobile-menu");
      // mobile Menu
      //-------------------------------
      $(".site-navigation .mainmenu-area nav").meanmenu({
        meanMenuClose: "<i class='fas fa-times'></i>",
        meanMenuCloseSize: "18px",
        meanScreenWidth: "1199",
        meanExpandableChildren: true,
        meanMenuContainer: ".mobile-menu-area .mobile-menu"
      });
    },

    /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
    sticky_header: function() {
      // drop down menu width overflow problem fix
      var menuWidth = $(window).width();
      if (menuWidth > 1199) {
        $("ul")
          .parent("li")
          .hover(function() {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
              var newpos = -$(menu).width() - 50;
              menu.css({
                left: newpos
              });
            }
          });
      }

      if ($(".site-header").length) {
        $(window).on("scroll", function() {
          var w = $(window).width();
          if (w > 1199) {
            if ($(this).scrollTop() > 0) {
              $(".site-header").addClass("sticky-active");
            } else {
              $(".site-header").removeClass("sticky-active");
            }
          }
        });
      }
    }
  };
})(jQuery);



     /*----------------------------------------
            Video Plugin (About Page)
        ----------------------------------------*/

    var $iframe = $('iframe'),
        $videoLink = $('.video-link'),
        playerTemplate =
        '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

    $videoLink.on('click', function (e) {
        var localTemplate = '',
            videoWidth = parseInt($(this).data('width')),
            videoHeight = parseInt($(this).data('height')),
            videoAspect = (videoHeight / videoWidth) * 100,
            // elements
            $player = null,
            $video = null,
            $close = null,
            $iframe = null;

        e.preventDefault();

        localTemplate = playerTemplate.replace(
            '{{iframevideo}}',
            $(this).prop('href')
        );

        $player = $(localTemplate);

        $player.find('.video-filler').css('padding-top', videoAspect + '%');

        $close = $player.find('.video-close').on('click', function () {
            $(this)
                .off()
                .closest('.player')
                .hide()
                .remove();
        });

        $player.appendTo('body').addClass('js--show-video');
    })  


 /*----------------------------------------
        AccordionPlugin (About Page)
 ----------------------------------------*/


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
