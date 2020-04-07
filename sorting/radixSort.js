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

function radixSort(arr) {
  var mostDigitNum = mostDigit(arr);

  for(let i = 0;i < mostDigitNum; i++) {
    // create 2d array
    let collector = [];
    for(let j=0;j<10;j++){
      collector[j] = [];
    }
    // place into array
    for(let j=0;j<arr.length;j++) {
      var digit = getDigit(arr[j], i);
      collector[digit].push(arr[j]);
    }
    // re-order
    let newArr = [];
    for(let j=0; j < collector.length; j++){
      for(let p=0;p<collector[j].length;p++) {
        newArr.push(collector[j][p]);
      }
    }
    arr = newArr;
  }
}

console.log(radixSort([2, 1, 40, 212, 11]));
