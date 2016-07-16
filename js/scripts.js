// Backend logic
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.cost = function() {
  return this.size += this.toppings;
}

// Frontend Logic
$(document).ready(function() {

  $("#order").click(function() {
    $("#order_area").fadeIn("slow");
    $("#header").animate({left: "26%"});
    $(this).hide();
  });

  $("form.size_toppings").submit(function(event) {
    event.preventDefault();

    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    if ($("input:radio[name=size]:checked").length <= 0 ) {
      alert("Oops, please select a size");
      return false;
    }

    var toppingsInput = 0;
    $("input:checkbox:checked").each(function() {
      return toppingsInput += parseInt(this.value);
    });

    var newOrder = new Pizza(sizeInput, toppingsInput);

    $("#total_cost").fadeIn().append("<h2>" + "Your total cost is $" + newOrder.cost() + " bucks and your pizza will be ready for pick-up in 30 minutes! Thanks for choosing Home Slice Pizza!" + "</h2>");
    $(this).hide();

  });

});
