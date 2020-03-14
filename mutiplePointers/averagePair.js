function averagePair(array, targetAvg) {
  if(array.length < 3) return false;
  var headPointer = 0;
  var tailPointer = array.length;

  while(headPointer < tailPointer) {
    var tempAvg = (headPointer + tailPointer) / 2;
    if(tempAvg === targetAvg) return true;

    if(tempAvg < targetAvg)
      headPointer ++;
     else
      tailPointer --;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
