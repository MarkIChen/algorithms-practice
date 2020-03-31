/* jshint esversion: 6 */

function quickSort(arr, leftIndex = 0, rightIndex = arr.length) {
  if (leftIndex == rightIndex)  return;

  let pivot = helper();

  quickSort(arr, leftIndex, pivot);
  quickSort(arr, pivot + 1, rightIndex);

  function helper() {
    const target = leftIndex;
    var pivot = leftIndex;

    for (let i = leftIndex+1; i < rightIndex; i++) {
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
    // let temp = arr[from];
    // arr.splice(from, 1);
    // arr.splice(where, 0, temp);

    [arr[from], arr[where]] = [arr[where], arr[from]];
  }

  return arr;
}

console.log(quickSort([ 7, 2, 3, 4, 11, 8, 2, 10, 5 ]));
