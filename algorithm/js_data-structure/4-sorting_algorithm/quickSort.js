// works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array

// BEST CASE = Normal O(n log n)
// AVERAGE CASE = Normal O(n log n)
// WORST Case = If already sorted O(n^2)

// Space Complexity O(log n)

function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([3, 1, 4, 5, 634, 24, 123, 54]));
