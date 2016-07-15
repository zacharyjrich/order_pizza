// Backend logic
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.cost {
  this.size += this.toppings;
}

// Frontend Logic
$(document).ready(function() {
  
  $("form#result_button").submit(function(event) {
    event.preventDefault();
  });

});
