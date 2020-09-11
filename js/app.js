

  $(window).on('load', function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      autoplayHoverPause: true,
      responsiveRefreshRate: 200,
      reponsive: true,
      navText: [
        '<svg width="45px" height="45px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="45px" height="45px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (el) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($(e.target).attr("href"))
      .find(".owl-carousel")
      .owlCarousel("invalidate", "width")
      .owlCarousel("update");
  });

  // DOi Tac
  $(".partner .owl-carousel").owlCarousel({
    items: 2,
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
        items: 5,
        margin : 5
      },
      1200: {
        items: 11,
      }
    },
  });

  $(".partner-slider .owl-carousel").owlCarousel({
    items: 10,
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
        items: 5,
        margin: 5,
      },
      1200: {
        items: 9,
      },
    },
  });

  $(".slider-full-container .owl-carousel").owlCarousel({
    items: 2,
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
        margin : 5
      },
      1200: {
        items: 4,
      }
    },
  });

  var sliderFix = $(".slider-fix .owl-carousel").owlCarousel({
    items: 2,
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
        margin : 5
      },
      1200: {
        items: 2,
        // nav: true,
      }
    },
  });

  $(".slider-fix .nav-slider-left").click(function(){
    sliderFix.trigger('prev.owl.carousel');
  })

  $(".slider-fix .nav-slider-right").click(function(){
    sliderFix.trigger('next.owl.carousel');
  })


  var sliderChange = $(".slider-change .owl-carousel").owlCarousel({
    items: 2,
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
        margin : 5
      },
      1200: {
        items: 2
      }
    },
  });

  $(".slider-change  .nav-slider-left").click(function(){
    sliderChange.trigger('prev.owl.carousel');
  })

  $(".slider-change  .nav-slider-right").click(function(){
    sliderChange.trigger('next.owl.carousel');
  })

  var sliderShiping = $(".slider-fast-shipping .owl-carousel").owlCarousel({
    items: 2,
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
        margin : 5,
      },
      1200: {
        items: 2,
      }
    },
  });

  $(".slider-fast-shipping  .nav-slider-left").click(function(){
    sliderShiping.trigger('prev.owl.carousel');
  })

  $(".slider-fast-shipping  .nav-slider-right").click(function(){
    sliderShiping.trigger('next.owl.carousel');
  })

  var countDownTimer = $('#countDownTimer').val();

  // countdown time

  if ( $('#countdownTime').length > 0) {
    $('#countdownTime').countdown(countDownTimer, function(event) {
      $(this).html(event.strftime(
      '<span class="days">%d days</span>  '
      + ': <span class="hours">%H</span> '
      + ': <span class="minute">%M</span> '
      + ': <span class="second">%S</span>'));
    });
  }


  $('.has-sub-menu').click(function(){
      $(this).toggleClass('show-menu');
  })

  $('.main-menu').click(function(){
    var parentElement = $(this).parent();
    $(parentElement).toggleClass('show-category');

    var iconElement = $(this).find('.fa-align-justify');
    if (iconElement && iconElement.length > 0){
      $(iconElement).toggleClass('fa-align-justify');
      $(iconElement).toggleClass('fa-times');
    } else {
      var iconCloseElement = $(this).find('.fa-times');
      if (iconCloseElement && iconCloseElement.length > 0){
        $(iconCloseElement).toggleClass('fa-times');
        $(iconCloseElement).toggleClass('fa-align-justify');
      }
    }
  })



  $("#main-flag").click(function(){
    $('.menu-language').toggleClass("visibilityNone")
  });

  $("body").click(function(e){
    if (!$(e.target).parent().is('.menu-language, .main-flag') && !$('.menu-language').hasClass("visibilityNone")) {
      $('.menu-language').toggleClass("visibilityNone");
    }
  })

  $(".sub-flag").click(function(){
    $('.main-flag').find('img').attr('src',$(this).find('img').attr('src'));
  });


});
