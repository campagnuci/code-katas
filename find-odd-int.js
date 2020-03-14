// Description:
// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  var count = 0;
  for(var i = 0; i<A.length; i++){
    for(var j = 0; j<A.length; j++){
      if(A[i] == A[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return A[i];
    }
  }
}

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));
