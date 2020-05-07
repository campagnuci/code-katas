function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex > this.pageCount() - 1) return -1;
  
  if (pageIndex < this.pageCount() - 1) {
    return this.itemsPerPage;
  } else {
    return this.itemCount() - ((this.pageCount() - 1) * this.itemsPerPage);
  }
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (this.itemCount() == 0 || itemIndex < 0 || itemIndex > this.itemCount()) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
}


// *************
// Tests

collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
helper = new PaginationHelper(collection, 10)

console.log(helper.pageCount() == 3);

console.log(helper.pageItemCount(1) == 10);
console.log(helper.pageItemCount(2) == 4);
console.log(helper.pageItemCount(3) == -1);
console.log(helper.pageIndex(40) == -1);

console.log(helper.pageIndex(22) == 2);
console.log(helper.pageIndex(3) == 0);
console.log(helper.pageIndex(0) == 0);
console.log(helper.pageIndex(-1) == -1);
console.log(helper.pageIndex(-23) == -1);
console.log(helper.pageIndex(-15) == -1);


console.log(helper.itemCount() == 24);

data = new PaginationHelper([], 10)
console.log(data.pageIndex(0), -1);
