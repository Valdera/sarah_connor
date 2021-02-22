// This pattern involver dividing a data set into smaller chunks and then repeating a process with a subset data

// This pattern can tremendously decrease time complexity

function searh(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    if (currentElement < val) {
      min = middle;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
