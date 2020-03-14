// "id": "541c8630095125aba6000c00",
// "name": "Sum of Digits / Digital Root",
// "slug": "sum-of-digits-slash-digital-root",
// "description": "In this kata, you must create a `digital root` function.
// A digital root is the _recursive sum of all the digits in a number._ Given _n_, take the sum of the digits of _n_.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.
// Here's how it works:
// ```ruby
//  digital_root(16)
//   => 1 + 6
//   => 7
//   digital_root(942)
//   => 9 + 4 + 2
//   => 15 ...
//   => 1 + 5
//   => 6
//   digital_root(132189)
//   => 1 + 3 + 2 + 1 + 8 + 9
//   => 24 ...
//   => 2 + 4
//   => 6
//   digital_root(493193)
//   => 4 + 9 + 3 + 1 + 9 + 3
//   => 29 ...
//   => 2 + 9
//   => 11 ...
//   => 1 + 1
//   => 2
//   digital_root(456)
//   => 4 + 5 + 6
//   => 15 ...
//   => 6

function digital_root(n) {
  var sumOfNums = 0;
  var arrOfNums = n.toString().split("").map(function(str) {  // [ 9, 4, 2 ]
    return parseInt(str);
  });
  while (arrOfNums.length > 1) {
    sumOfNums = arrOfNums.reduce(function(a, b) { // 15
      return a + b;
    });
    arrOfNums = sumOfNums.toString().split("").map(function(str) { // turns 15 into [1, 5]
    return parseInt(str);
    });
  }
  return sumOfNums;
}

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(16));
console.log(digital_root(456));
