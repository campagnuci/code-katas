function createPhoneNumber(numbers){
  return numbers.toString().replace(/,/g, '').replace(/^(\d{3})(\d{3})(\d{4})$/g, '($1) $2-$3');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
