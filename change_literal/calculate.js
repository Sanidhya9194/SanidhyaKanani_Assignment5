"use strict";

$(document).ready(() => {
  $("#calculate").click(() => {
    // get the number of cents from the user
    let cents = Math.floor(parseInt($("#cents").val()));
    coins.makeChange(cents);

    // it will display the results of the calculations
    $("#quarters").val(coins.quarters);
    $("#dimes").val(coins.dimes);
    $("#nickels").val(coins.nickels);
    $("#pennies").val(coins.cents);

    // set focus on cents text box
    $("#cents").focus();
  }); // end click() method

  // set focus on cents text box on initial load
  $("#cents").focus();
}); // end ready() method
