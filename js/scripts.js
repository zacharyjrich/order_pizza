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
    $("#prime").animate({left: '26%'});
    $(this).hide();
  });

  $("form.size_toppings").submit(function(event) {
    event.preventDefault();
    var newOrder = new Pizza();
    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var toppingsInput = 0;
    $("input:checkbox:checked").each(function() {
      return toppingsInput += parseInt(this.value);
    });
    var order = new Pizza(sizeInput, toppingsInput);

    $("#total_cost").text("");
    $("#total_cost").append("<h2>" + "Your total cost is $" + order.cost() + " bucks and your pizza will be ready for pick-up in 30 minutes! Thanks, from Home Slice Pizza!" + "</h2>");
    $("form.size_toppings").hide();
  });

});

// if(!$("form input[type=file]").val()) {
//   alert("You gots to pick a pizza first!");
//   return false;
// } else
