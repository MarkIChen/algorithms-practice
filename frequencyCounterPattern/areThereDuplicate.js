/*jshint esversion: 6*/

function areThereDuplicates(...args) {

  var collector = {};
  for(let i = 0; i<args.length; i ++) {
    if(! collector[args[i]]){
      collector[args[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3));

console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));
