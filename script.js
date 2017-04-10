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

// Returns the top position and opacity values to apply to an element to give it the animation
function getTopAndOpacity(element) {
  var topAndOpacity = [];
  
  // Percentage of viewport size that element is positioned down from top of viewport
  var heightFromViewportPct = element[0].getBoundingClientRect().top / $window.height();
  // Percentage of height of viewport that element takes up
  var elementHeightPct = element.height() / $window.height();
  // Percentage of viewport to fade element at (0.85 of distance from top of viewport to top of element)
  var fadeLinePct = (.5 - elementHeightPct / 2) * 0.85;

  if (heightFromViewportPct < fadeLinePct) {
    // Top of page: Fade out and accelerate up
    topAndOpacity[0] = element[0].getBoundingClientRect().top * 0.3;
    topAndOpacity[1] = heightFromViewportPct / fadeLinePct;
  } else if (heightFromViewportPct < 1 - fadeLinePct) {
    // Middle of page: Move up with scroll 
    topAndOpacity[0] = topAndOpacity[0];
    topAndOpacity[1] = 1;
  } else {
    // Bottom of page: Fade in and accelerate up with scroll
    topAndOpacity[0] = element[0].getBoundingClientRect().top * 0.3;
    topAndOpacity[1] = (1-heightFromViewportPct) / fadeLinePct;
  }

  return topAndOpacity;
}

$window = $(window);

$window.scroll(function () {
  var topAndOpacity = getTopAndOpacity($('section#test'));
  $('section#test').css({
    'top': topAndOpacity[0],
    'opacity': topAndOpacity[1]
  });
})