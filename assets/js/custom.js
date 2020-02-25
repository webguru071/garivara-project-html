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
