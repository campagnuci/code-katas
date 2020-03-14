// 	"id": "5720a1cb65a504fdff0003e2",
// "name": "Find the Difference in Age between Oldest and Youngest Family Members",
// "slug": "find-the-difference-in-age-between-oldest-and-youngest-family-members",

// At the annual family gathering, the family likes to find the oldest living family member’s age
// and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given
// in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with
// [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  const data = ages.sort((a,b) => a - b);
  return [data[0], data[data.length-1], data[data.length-1]-data[0]];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));
