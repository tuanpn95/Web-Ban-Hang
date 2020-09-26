$(document).ready(function () {
//  $(".main-image img").ezPlus();

 var mainImage = $("#img-container").owlCarousel({
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
      '<svg width="30px" height="30px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="30px" height="30px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
    ],
  })

  $('.image-galery').on("click", function (e) {
    e.preventDefault();
    var number = $(this).index();
    mainImage.data("owl.carousel").to(number, 300, true);
  });

});

function showArticle(){
  $('#function-description').css("height", "auto");
  $('.show-more').css("display","none");
}

function viewMoreSelling(){
  $('.ovlarticle').css('display','none');
  $('.viewmorekeyselling').css('display','none');
  $('.special-point').css('max-height','none');
}

function viewStore(){
  var x = document.getElementById("showstore");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}