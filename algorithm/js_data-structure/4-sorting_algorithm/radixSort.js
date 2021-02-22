// Radix sort is a special sorting algorithm that works on lists of numbers, it never makes comparisons between elements, it exploits the fact that information about the size of a number is encoded in the number of digits

// n = length of Array
// k = number of digits
// BEST CASE = Normal O(nk)
// AVERAGE CASE = Normal O(nk)
// WORST Case = If number really long O(nk)

// Space Complexity O(n+k)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([12, 3, 1, 4, 353, 654, 123, 123412, 43]));
