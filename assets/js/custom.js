// (function($) {
//   "use strict";

//   var digiciaApp = {
//     /* ---------------------------------------------
//             ## Mobile Menu
//         --------------------------------------------- */
//     mobile_menu: function() {
//       var mobilesearch = $(
//         ".site-header .navigation-area .header-navigation-right"
//       )
//         .clone()
//         .appendTo(".mobile-menu");
//       // mobile Menu
//       //-------------------------------
//       $(".site-navigation .mainmenu-area nav").meanmenu({
//         meanMenuClose: "<i class='fas fa-times'></i>",
//         meanMenuCloseSize: "18px",
//         meanScreenWidth: "1199",
//         meanExpandableChildren: true,
//         meanMenuContainer: ".mobile-menu-area .mobile-menu"
//       });
//     },

// })(jQuery);

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

    /* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
    initializ: function() {
      digiciaApp.mobile_menu();
    }
  };
  /* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
  $(function() {
    digiciaApp.initializ();
  });
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
