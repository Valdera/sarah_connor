// A sorting algorithm where the largest values bubble up to the top!

// BEST CASE = Nearly sorted O(n)
// AVERAGE CASE = Normal O(n^2)
// WORST Case = Random O(n^2)

// Space Complexity O(1)

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 1230, 29, 8]));
