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
    $(".size_toppings").fadeIn("slow");
    $("#prime").animate({left: '28%'});
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
    $("#total_cost").append("<h3>" + "Your total cost is $" + order.cost() + "</h3>");
    $("form.size_toppings").hide();
  });
});

// if(!$("form input[type=file]").val()) {
//   alert("You gots to pick a pizza first!");
//   return false;
// } else
