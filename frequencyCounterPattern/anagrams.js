/*jshint esversion: 6 */

function validAnagram(a, b) {
  // It's impossible to be anagram, if the lengths are not the same.
  if(a.length != b.length) {
    return false;
  }

  var collector = {};
  for (let i = 0; i < a.length; i++) {
    let key = a[i];
    key in collector? collector[key] += 1 : collector[key] = 1;
  }

  for (let i = 0; i < b.length; i++) {
    let key = b[i];
    if(!(collector[key])) {
      return false;
    } else {
      collector[key] -= 1;
    }
  }

  return true;
}

let a = 'qwetwy';
let b = 'qeywrt';

console.log(validAnagram(a, b));
