function countOdd(array) {
  // sharing the array to store odd number
  var collectList = [];

  helper(array);

  function helper(arr) {
    if(arr[0] % 2 === 1)
      collectList.push(arr[0]);

    if(arr.length > 0)
      helper(arr.slice(1));
  }

  return collectList;
}

console.log(countOdd([1, 2, 3, 4, 5]));
