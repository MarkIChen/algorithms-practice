/*jshint esversion: 6*/

function selectionSort(arr) {
  var target = arr.slice();
  let swapCount = 0;
  for(let i =0; i< target.length -1 ; i++) {
    // this algo. needs an extra space to store info.
    let index = i;
    for(let j = i ; j < target.length ; j++){
        if(target[j] <  target[index]) {
          index = j;
        }
    }
    // swap
    if(i !== index) {
      swapCount ++;
      [target[i], target[index]] = [target[index], target[i]];
    }

  }
  console.log(swapCount);
  return target;
}

var arr = [37, 45, 29, 8, 1, 2, 3, 4];

let ans = selectionSort(arr);
console.log(ans);
