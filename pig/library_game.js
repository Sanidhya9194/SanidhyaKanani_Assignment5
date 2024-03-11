"use strict";
const game = {
  player1: new Pig(),
  player2: new Pig(),
  currentPlayer: null,
  get isValid() {
    if (this.player1.name === "" || this.player2.name === "") {
      return false;
    } else {
      return true;
    }
  },
  start(name1, name2) {
    this.player1.name = name1;
    this.player2.name = name2;
    this.currentPlayer = this.player1;
    return this;
  },
  reset() {
    this.player1.reset();
    this.player2.reset();
    return this;
    // call the reset() method on each of the player Pig objects
  },
  changePlayer() {
    // determine whether player1 or player2 is the current player, then
    // update the currentPlayer property to hold the other player.
    this.currentPlayer =
      this.currentPlayer == this.player1 ? this.player2 : this.player1;
  },
  hold(score1, score2) {
    // call the hold() method of the current player
    this.currentPlayer.hold();
    {
      // determine whether player1 or player2 is the current player, then
      // update that player's score with the current total
      this.currentPlayer == this.player1
        ? $("#score1").val(this.player1.total)
        : $("#score2").val(this.player2.total);
    }
  },
  checkWinner() {
    // Check the players' totals to see if either is at or above 100 points.
    if (this.player1.total >= 100) {
        // If player1's total is 100 or more, return player1's name.
        return this.player1.name;
    } else if (this.player2.total >= 100) {
        // If player2's total is 100 or more, return player2's name.
        return this.player2.name;
    } else {
        // If neither player's total is 100 or more, return the string "none".
        return "none";
    }
  },
};
