
function handleSelect(elm)
{
  window.location.href = elm.value;
}
$(document).ready(function () {

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


  
  $('.listcate').click(function(){
    $(this).toggleClass("set-height-35px");
  });
  $('.main-cate').click(function(){
    var submenuElement = $(this).parent().find('ul');
    $(this).toggleClass("expand");
    $(submenuElement).toggleClass("visibilityNone");
    var scroll = $(this).parent().find('.scrollbar');
    $(scroll).toggleClass("visibilityNone");
  });

  $('.listcate ul li a').click(function(){
    $('.listcate ul li a').removeClass('active')
    $(this).addClass('active')
  });
  $('.brand ul li a').click(function(){
    $('.brand ul li a').removeClass('active')
    $(this).addClass('active')
  });
});
