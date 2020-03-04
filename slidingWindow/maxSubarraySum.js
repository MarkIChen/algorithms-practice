/*jshint esversion: 6*/

function maxSubarraySum(array, size) {
  if(array.length < size) throw "The input is invalid.";
  // add the first window element
  var windowSum = 0;
  for (let i = 0; i < size; i++) {
    windowSum += array[i];
  }
  var max = windowSum;
  // start to shift the whindow
  for (let i = 0; i < array.length - size; i++) {
    windowSum = windowSum - array[i] + array[i+size];
    if(windowSum > max) max = windowSum;
  }

  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([], 3));
