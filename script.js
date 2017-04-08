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