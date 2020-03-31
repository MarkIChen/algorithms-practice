/* jshint esversion: 6 */

function quickSort(arr) {
  if (arr.length <= 1)
    return arr;

  let pivot = helper(arr);
  let leftArr = quickSort(arr.slice(0, pivot));
  let rightArr = quickSort(arr.slice(pivot + 1));

  leftArr.push(arr[pivot]);

  function helper(arr) {
    const target = 0;
    var pivot = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[target]) {
        pivot++;
        // exchange
        exchange(arr, i, pivot);
      }
    }
    exchange(arr, target, pivot);
    return pivot;
  }
  function exchange(arr, from, where) {
    let temp = arr[from];
    arr.splice(from, 1);
    arr.splice(where, 0, temp);
  }
  // mefge
  return leftArr.concat(rightArr);
}



console.log(quickSort([ 7,2, 3,  4, 11, 8, 2, 10, 5 ]));
