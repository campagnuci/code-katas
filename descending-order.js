// Your task is to make a function that can take any non-negative integer as a argument and return it with its
// digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


function descendingOrder(n) {
  if(n.toString().length == 1) return n;

  var digits = (""+n).split("");

  // Comparison for the descending order
  digits = digits.sort(function(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
  })

  return parseInt(digits.toString().replace(/,/g, ''));
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
