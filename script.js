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

  // WOW fadeInUp on scroll animation
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 250,
    mobile: true,
    live: true,
  });
  wow.init();

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

  /* Start of scrolling animation algos */

  function test() {
    $('#test').toggleClass("myFadeUpIn");
  }

  function test2() {
    $('#test').toggleClass("myFadeUpOut");
  }

  /* Edit classes on scroll into view algo */
  function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
  }

  // Check if it's time to start the animation.
  function checkAnimation() {
    var $elem = $('#test');

    // If the animation has already been started
    // if ($elem.hasClass('myFadeUpIn')) return;

    if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('myFadeUpIn');
    } else {
      $elem.removeClass('myFadeUpIn');
    }
  }

  // Capture scroll events
  $(window).scroll(function () {
    var scrollVar = $(window).scrollTop();
    checkAnimation();
  });

  /* AOS animation on scroll algo */
  AOS.init({
    easing: 'ease-out',
    duration: 800,
    offset: 400,
  });

  /* Bi-directional scroll animation algo */
  var previousScroll = 0;

  $(window).scroll(function () {

    var element = $('#groceryquest');
    // Percentage of viewport size that element is positioned down from top of viewport
    var heightFromViewportPct = element[0].getBoundingClientRect().top / $(window).height();
    // Percentage of height of viewport that element takes up
    var elementHeightPct = element.height() / $(window).height();
    // Percentage of viewport to fade element at (0.85 of distance from top of viewport to top of element)
    var fadeLinePct = (.5 - elementHeightPct / 2) * 0.85;

    // Number of pixels between top of viewport and top of page
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      // Scrolling down, scrollTop() increases
      if (heightFromViewportPct < .4) {
        // Element at top of screen
        $("#groceryquest").removeClass('myFadeDownIn myFadeDownOut myFadeUpIn');
        if (!$("#groceryquest").hasClass('myFadeUpOut')) {
          $("#groceryquest").addClass('myFadeUpOut');
        }
      }
      else if (heightFromViewportPct > .6) {
        // Element at bottom of screen
        $("#groceryquest").removeClass('myFadeDownIn myFadeUpOut myFadeDownOut');
        if (!$("#groceryquest").hasClass('myFadeUpIn')) {
          $("#groceryquest").addClass('myFadeUpIn');
        }
      }
    } else {
      // Scrolling up, scrollTop() decreases
      if (heightFromViewportPct < .4) {
        // Element at top of screen
        $("#groceryquest").removeClass('myFadeDownOut myFadeUpOut myFadeUpIn');
        if (!$("#groceryquest").hasClass('myFadeDownIn')) {
          $("#groceryquest").addClass('myFadeDownIn');
        }
      }
      else if (heightFromViewportPct > .6) {
        // Element at bottom of screen
        $("#groceryquest").removeClass('myFadeDownIn myFadeUpOut myFadeUpIn');
        if (!$("#groceryquest").hasClass('myFadeDownOut')) {
          $("#groceryquest").addClass('myFadeDownOut');
        }
      }
    }
    previousScroll = currentScroll;
  });

  // End of Javascript file
}());