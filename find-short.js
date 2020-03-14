// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  let data = str.split(' ');
  const res = [];
  for(let i=0; i<data.length; i++) {
    res.push(data[i].length);
  }
  return Math.min(...res);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
