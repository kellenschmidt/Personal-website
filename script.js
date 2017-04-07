$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $titlePage = $("#title-page");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $titlePage.height()-$nav.height());
  });
});

wow = new WOW({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       250,        // default is 0
  mobile:       true,       // default
  live:         true,       // default
  // callback:     function(box) {
  //   box.removeClass();
  // }
});
wow.init();