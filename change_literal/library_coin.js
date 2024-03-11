"use strict";

let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    cents: 0,

    makeChange: function(amount) {
         // Check if the amount is valid
        if (isNaN(amount) || amount < 0 || amount > 99) {
            $("#cents").val("");
            return alert("Invalid number of amount. Please enter a valid number between 0 and 99.");
        }

        // Calculate the number of quarters
        this.quarters = Math.floor(amount / 25);
        amount = amount % 25;

        // Calculate the number of dimes
        this.dimes = Math.floor(amount / 10);
        amount = amount % 10;

        // Calculate the number of nickels
        this.nickels = Math.floor(amount / 5);

        // Calculate the number of remaining cents
        this.cents = amount % 5;
    }
};
