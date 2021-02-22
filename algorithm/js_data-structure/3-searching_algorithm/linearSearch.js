// Gvien an array, the simplest way to search for an value is to look at every element in the array and check if it's value we want
// - indexOf
// - includes
// - find
// - findIndex
usernames = [
  'tommy',
  'monkey_gurl',
  'dinesh123',
  'patrick33',
  'cats4lyfe',
  'timothy',
  'tom',
  'tommy1'
];
usernames.indexOf('tommy');

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
    return -1;
  }
}

linearSearch([34, 51, 1, 2, 3, 45, 3, 6235, 56], 100);
