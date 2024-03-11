"use strict";

class Coins {
  constructor() {
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.cents = 0;
  }

  makeChange(amount) {
    if (isNaN(amount) || amount < 0 || amount > 99) {
      $("#cents").val("");
      return alert(
        "Invalid number of cents. Please enter a valid number between 0 and 99"
      );
    }

    // Calculate the number of quarters, dimes , nickles and cents
    this.quarters = Math.floor(amount / 25);
    this.cents = amount % 25;

    this.dimes = Math.floor(this.cents / 10);
    this.cents %= 10;

    this.nickels = Math.floor(this.cents / 5);
    this.cents %= 5;
  }
}
