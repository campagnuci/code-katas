// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const xs = (str.match(/[xX]/g) || []).length || 0;
  const os = (str.match(/[oO]/g) || []).length || 0;
  if(xs == os) return true;
  else return false;
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
  var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
  return a.length === b.length;
}

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
