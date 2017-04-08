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

// Fade out scroll up animation
$window = $(window);

function getTopAndOpacity(element) {
  var scrollVar = $window.scrollTop();
  var topAndOpacity = [0, 0];
  // Pixels between top of element and bottom of #title-page
  var heightFromParent = element.position().top - $('#title-page').height();
  // Percentage of viewport size that element is positioned down from top of viewport
  var heightFromViewportPct = element[0].getBoundingClientRect().top/$window.height();
  // Percentage of height of viewport that element takes up
  var elementHeightPct = element.height()/$window.height();
  // Percentage of viewport to fade element at (.8 of distance from top of viewport to top of element)
  var fadeLinePct = (.5 - elementHeightPct/2) * .8
  
  if (heightFromViewportPct < fadeLinePct) {
    topAndOpacity[0] = 0;
    topAndOpacity[1] = 0 + (heightFromViewportPct*4);
  } else
  if (heightFromViewportPct < 1 - fadeLinePct) {
    topAndOpacity[0] = topAndOpacity[1];
    topAndOpacity[1] = 1;
  }
  else {
    topAndOpacity[0] = 0;
    topAndOpacity[1] = 0 + (scrollVar)/200;
  }
  return topAndOpacity;
}

$(window).scroll(function () {
  var topAndOpacity = getTopAndOpacity($('section#test'));
  $('section#test').css({
    'top': topAndOpacity[0],
    'opacity': topAndOpacity[1]
  });
})