/*jshint esversion: 6 */

function insertionSort(arr) {

  for(let i = 1; i < arr.length; i++) {
    // sorting
    let index = i;
    for(let j = i - 1; j >= 0 && arr[i] < arr[j];j--) {
      index = j;

    }
    if(index != i){
      let target = arr[i];
      arr.splice(i, 1);
      arr.splice(index, 0, target);
    }
  }

}


var arr = [3, 44, 38, 5, 47, 15];

insertionSort(arr);

console.log(arr);
