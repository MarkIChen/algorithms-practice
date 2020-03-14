
function binarySearch(arr, target) {
  if(arr.length === 1) return (arr[0] === target)? 0 : -1;

  var leftPointer = 0;
  var rightPointer = arr.length-1;

  while(leftPointer <= rightPointer) {
    var middle = Math.round((leftPointer + rightPointer) / 2);

    if(arr[middle] === target) return middle;

    if(arr[middle] > target) rightPointer = middle - 1;
    else leftPointer = middle + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 2, 3, 4, 7, 8, 9], 8));
