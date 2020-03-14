/*jshint esversion:6 */
var arr = [1, 2, [3, [4, 5]]];

function flatten(target) {

  var answear = [];
  helper(target);

  function helper(target) {
    for(var item of target) {
      if(typeof(item) !== 'number') {
        helper(item);
      } else {
        answear.push(item);
      }
    }
  }
  return answear;
}

function flattenPure(target) {
  var answear = [];
  for(var item of target) {
    if(typeof(item) !== 'number') {
      // Wrong! The return type is an array.
      // answear.push(flattenPure(item));

      answear = answear.concat(flattenPure(item));
    } else {
      answear.push(item);
    }
  }

  return answear;
}

console.log(flatten(arr));
console.log(flattenPure(arr));
