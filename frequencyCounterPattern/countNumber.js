function sameFrequency(numberA, numberB) {

  var temp = parseInt(numberA %10);
  numberA = parseInt(numberA / 10);
  var collector = {};

  // recognize numbers in A
  while(temp) {
    if (!collector[temp]) {
      collector[temp] = 1;
    } else {
      collector[temp] ++;
    }

    temp = parseInt(numberA %10);
    numberA = parseInt(numberA / 10);
  }

  // compare to B
  temp = parseInt(numberB % 10);
  numberB = parseInt(numberB / 10);
  while(temp) {
    if(! collector[temp]) {
      return false;
    } else {
      collector[temp] -= 1;
    }
    temp = parseInt(numberB % 10);
    numberB = parseInt(numberB / 10);
  }
  return true;
}

console.log(sameFrequency(182, 281));
