function periodIsLate(last, today, cycleLength) {
  return today > last.setDate(last.getDate() + cycleLength) ? true : false;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)); // False
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)); // True
