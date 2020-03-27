/* jshint esversion: 6 */

function slice(arr) {
  if(arr.length == 1) return arr;

  var halfLength = Math.ceil(arr.length/2);

  if(halfLength >= 1) {
    var leftArr = slice(arr.slice(0, halfLength));
    var rightArr = slice(arr.slice(halfLength));
  }

  return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
  let leftPointer = 0;
  let rightPointer = 0;

  let res = [];
  while(leftPointer < arr1.length && rightPointer < arr2.length) {
    if(arr1[leftPointer] < arr2[rightPointer]){
      res.push(arr1[leftPointer]);
      leftPointer ++;
    } else {
      res.push(arr2[rightPointer]);
      rightPointer ++;
    }
  }
  while(leftPointer < arr1.length) {
    res.push(arr1[leftPointer]);
    leftPointer++;
  }
  while(rightPointer < arr2.length) {
    res.push(arr2[rightPointer]);
    rightPointer ++;
  }


  return res;
}

// let res = merge([1, 10, 55],[2, 14, 50, 100]);
console.log(slice([4, 1, 2, 7, 10]));
