$(document).ready(function(){
  $("#burger-container").on('click', function(){
      $(this).toggleClass("open");
  });
});

$(function() {
    var _window = $(window);
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
