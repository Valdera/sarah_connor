// Similiar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// BEST CASE = Normal O(n^2)
// AVERAGE CASE = Normal O(n^2)
// WORST Case = Normal O(n^2)

// Space Complexity O(1)

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort([213, 123, 2, 12, 31, 33, 11]));
