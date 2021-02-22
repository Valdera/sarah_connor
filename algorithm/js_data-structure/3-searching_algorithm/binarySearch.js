// Binary Search is a much faster form of search, rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time, Binary search only works on sorted arrays!

function bunarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.flooe((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}

binarySearch([2, 3, 4, 1, 5, 6, 7, 23, 154, 654], 15);
