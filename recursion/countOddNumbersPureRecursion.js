function countOdd(array){
  collectList = [];

  var target = array[0];
  if(target % 2 === 1) {
    collectList.push(target);
  }

  if(array.length >= 1)
    collectList = collectList.concat(countOdd(array.slice(1)));
  return collectList;
}

console.log(countOdd([1, 2, 3, 4, 5]));
