/* jshint esversion: 6 */

function getDigit(number, index) {
  return parseInt(number % Math.pow(10, index + 1) / Math.pow(10, index));
}

function digitCount(number) {
  if(number <= 0) return 0;
  return Math.floor(Math.log10(number)) + 1;
}

function mostDigit(arr) {
  var maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(arr[i]));
  }
  return maxDigit;
}

console.log(mostDigit([1, 23, 412, 5678]));
// console.log(getDigit(12345, 0));
