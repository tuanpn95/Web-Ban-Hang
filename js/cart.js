$(document).ready(function () {
  $("#callAnother").click(function () {
    $(".customer-receive .infouser").toggleClass("hidden");
  });

  $("#exportFax").click(function () {
    $(".infocompany").toggleClass("hidden");
  });

  calculateTotalPrice();

  $("#numberItem").text($(".listorder li").length);

  $(".abate").click(function () {
    var that = this;
    var parentElement = $(that).parent();
    var inputNumberElement = $(parentElement).find('.number');
    var minusElement = $(parentElement).find(".abate");

    var currentNumber = $(inputNumberElement).text();

    if (currentNumber > 1) {
      currentNumber--;

      $(inputNumberElement).text(currentNumber);

      if (currentNumber == 1 && !$(minusElement).hasClass("disable")) {
        $(minusElement).addClass("disable");
      }
    }

    calculateTotalPrice();
  });

  $(".remove").click(function () {
    $(this).parent().parent().remove()
    
    calculateTotalPrice();
    $("#numberItem").text($(".listorder li").length);
  });


  $(".augment").click(function () {
    var that = this;
    var parentElement = $(that).parent();
    var inputNumberElement = $(parentElement).find('.number');
    var currentNumber = $(inputNumberElement).text();
    var minusElement = $(parentElement).find(".abate");

    +currentNumber++;
    $(inputNumberElement).text(currentNumber);

    if (currentNumber > 1 && $(minusElement).hasClass("disable")) {
      $(minusElement).removeClass("disable");
    }

    calculateTotalPrice();
  });

  $("#cod").click(function(){
    $('.bank').addClass("hidden");
    $('.wallet').addClass("hidden");
  });

  $("#bank").click(function(){
    $('.bank').removeClass("hidden");
    $('.wallet').addClass("hidden");
  });

  $("#wallet").click(function(){
    $('.bank').addClass("hidden");
    $('.wallet').removeClass("hidden");
  });
});

function calculateTotalPrice() {
  var arrPrice = $(".colinfo");
  var total = 0;

  for (let i = 0; i < arrPrice.length; i++) {
    var childElement = $(arrPrice)[i];
    var number = $(childElement).find(".number").text();
    var currentPrice = $(childElement).find(".current-price").val();
    total = (+number * +currentPrice)  + total;
  }

  var totalPriceString = formatCurrency(+total, "đ");

  $("#totalPrice").text(totalPriceString);
}

function formatCurrency(n, currency) {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
    }) + currency
  );
}
