// "id": "57cebe1dc6fdc20c57000ac9",
// "name": "Shortest Word",
// "slug": "shortest-word",
// "description": "Simple, given a string of words, return the length of the
// shortest word(s).\n\nString will never be empty and you do not need to
// account for different data types.\n",

function findShort(str) {
  let data = str.split(' ');
  let res = [];
  for(let i=0; i<data.length; i++) {
    res.push(data[i].length);
  }
  return Math.min(...res);
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort('Mine Waves'));
