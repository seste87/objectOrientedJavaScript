function diceRoll() {
  var sides = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
}

var dice = {
  roll: function diceroll () {
    var sides = 6;
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    console.log(randomNumber);
  }
}