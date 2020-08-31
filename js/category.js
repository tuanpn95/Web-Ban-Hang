$(document).ready(function () {
  $(".item-list .owl-carousel").owlCarousel({
    items: 4,
    margin: 30,
    smartSpeed: 450,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 5,
      },
      1200: {
        items: 4,
      },
    },
  });

  /*var elementPosition = $(".category").offset();
  var elementFooter = $("#footer").offset();

  $(window).scroll(function () {
    if (screen.width > 768) {
      if ($(window).scrollTop() + 900 >= elementFooter.top) {
        $(".category")
          .css("position", "absolute")
          .css("bottom", "50px")
          .css("top", "auto");
        $(".item-list").css("margin-left", "240px");
      } else if ($(window).scrollTop() > elementPosition.top) {
        $(".category")
          .css("position", "fixed")
          .css("top", "0")
          .css("bottom", "auto");
        $(".item-list").css("margin-left", "240px");
      } else {
        $(".category").css("position", "static");
        $(".item-list").css("margin-left", "0");
      }
    }
  });*/

  $('.main-cate').click(function(){
    var submenuElement = $(this).parent().find('ul');
    $(this).toggleClass("expand");
    $(submenuElement).toggleClass("visibilityNone");
  });
});
