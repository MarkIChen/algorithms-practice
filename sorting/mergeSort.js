/* jshint esversion: 6 */

function merge(arr1, arr2) {
  let leftPointer = 0;
  let rightPointer = 0;

  let res = [];
  while(leftPointer < arr1.length || rightPointer < arr2.length) {
    if(arr1[leftPointer] < arr2[rightPointer]){
      res.push(arr1[leftPointer]);
      leftPointer ++;
    } else {
      res.push(arr2[rightPointer]);
      rightPointer ++;
    }
  }
  return res;
}

let res = merge([1, 10, 55],[2, 14, 99, 100]);
console.log(res);
