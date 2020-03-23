/*jshint esversion: 6 */

function insertionSort(arr) {

  for(let i = 1; i < arr.length; i++) {
    // sorting
    let index = 0;
    while(index < i) {
      if(arr[i] < arr[index]) {
        // swap
        let target = arr[i];
        arr.splice(i, 1);
        arr.splice(index, 0, target);
      }
      console.log(arr);
      index++;
    }

  }

}


var arr = [3, 44, 38, 5, 47, 15];

insertionSort(arr);

console.log(arr);
