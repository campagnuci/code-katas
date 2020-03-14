// Create a function (or write a script in Shell) that takes an integer as an
// argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number%2 === 0 ? 'Even' : 'Odd';
}

function even_or_odd(number) {
  return number%2 ? 'Odd' : 'Even';
}

console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(7));
console.log(even_or_odd(1));
