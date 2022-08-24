function cashmoney() {
  var numbers = [];
  for (var i = 0; i < 6; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * 49) + 1;
    for (var y = 0; y < 49; y++) {
      if (numbers[y] === randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }
  var highestNumber = 49;
  for (var m = 0; m < numbers.length; m++) {
    for (var n = m + 1; n < numbers.length; n++) {
      if (numbers[n] < numbers[m]) {
        highestNumber = numbers[m];
        numbers[m] = numbers[n];
        numbers[n] = highestNumber;
      }
    }
  }
  return numbers.join(" - ");
}
export default cashmoney;
