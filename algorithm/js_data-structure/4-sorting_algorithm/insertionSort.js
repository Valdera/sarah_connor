// Builds up the sort by gradually creating a larger left half which is always sorted

// BEST CASE = Nearly sorted O(n)
// AVERAGE CASE = Normal O(n^2)
// WORST Case = Random O(n^2)

// Space Complexity O(1)

function insertionSort(arr, value) {
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + i] = arr[j];
    }
    arr[j + i] = currentVal;
  }
  return arr;
}
