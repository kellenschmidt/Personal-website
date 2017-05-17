(function () {

  // Smooth scroll on down arrow click
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });

  // Navbar color fade on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      var $titlePage = $("#title-page");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $titlePage.height() - $nav.height());
    });
  });

  // Typewriter animation
  $(document).ready(function () {
    $(".title-page-name").typeIt({
      strings: "What's up?",
      startDelay: 2000,
      speed: 200,
      lifeLike: true,
      autoStart: false,
      cursorSpeed: 1400,
    }).tiPause(2500)
      .tiDelete(10)
      .tiType("I'm ")
      .tiType("Kellen Schmidt");
  });

  /* Start of Kellen's scrolling animation algo */
  var previousScroll = 0;

  $(window).scroll(function (i, obj) {
    
    // setTimeout(function() {
      // Number of pixels between top of viewport and top of page
      var currentScroll = $(window).scrollTop();

      $(".kellen-scroll-anim").each(function() { 
        var $element = $(this);
        // var $element = $('#geodeals');

        // Percentage of viewport size that element is positioned down from top of viewport
        var object = $element[0].getBoundingClientRect();
        var heightFromViewportTop = object.top / $(window).height();
        var heightFromViewportBottom = ($(window).height()-object.bottom) / $(window).height();

        console.log("hfvpBot: " + heightFromViewportBottom + ", hfvpTop: " + heightFromViewportTop);
        
        if (currentScroll > previousScroll) {
          // Scrolling down, scrollTop() increases
          if (heightFromViewportTop < .3) {
            // Element at top of screen
            $element.removeClass('myFadeDownIn myFadeDownOut myFadeUpIn');
            if (!$element.hasClass('myFadeUpOut')) {
              $element.addClass('myFadeUpOut');
            }
          }
          else if (heightFromViewportBottom < .3 && heightFromViewportBottom > 0) {
            // Element at bottom of screen
            $element.removeClass('myFadeDownIn myFadeUpOut myFadeDownOut');
            if (!$element.hasClass('myFadeUpIn')) {
              $element.addClass('myFadeUpIn');
            }
          }
        } else {
          // Scrolling up, scrollTop() decreases
          if (heightFromViewportBottom < .3) {
            // Element at bottom of screen
            $element.removeClass('myFadeDownIn myFadeUpOut myFadeUpIn');
            if (!$element.hasClass('myFadeDownOut')) {
              $element.addClass('myFadeDownOut');
            }
          }
          else if (heightFromViewportTop > .1) {
            // Element at top of screen
            $element.removeClass('myFadeDownOut myFadeUpOut myFadeUpIn');
            if (!$element.hasClass('myFadeDownIn')) {
              $element.addClass('myFadeDownIn');
            }
          }
        }
      });
    // }, 1000/20);
    
    previousScroll = currentScroll;
  });

  // End of Javascript file
}());