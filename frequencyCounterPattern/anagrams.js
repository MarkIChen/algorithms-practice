/*jshint esversion: 6 */

function validAnagram(a, b) {
  // It's impossible to be anagram, if the lengths are not the same.
  if(a.length != b.length) {
    return false;
  }


  let firstCharArray = a.split('');
  let secondCharArray = b.split('');

  var firstCollector = {};
  for (let i = 0; i < firstCharArray.length; i++) {
    let key = firstCharArray[i];
    if (!(key in firstCollector)) {
      firstCollector[key] = 1;
    } else {
      firstCollector[key] += 1;
    }
  }

  var secondCollector = {};
  for (let i = 0; i < secondCharArray.length; i++) {
    let key = secondCharArray[i];
    if (!(key in secondCollector)) {
      secondCollector[key] = 1;
    } else {
      secondCollector[key] += 1;
    }
  }

  for (let i = 0; i < firstCharArray.length; i++) {
    let key = firstCharArray[i];
    if (firstCollector[key] != secondCollector[key]) {
      return false;
    }
  }

  return true;
}

let a = 'qwetry';
let b = 'qeywrt';

console.log(validAnagram(a, b));
