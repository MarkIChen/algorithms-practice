/*jshint esversion: 6*/

function countUniqueValues(array){
    let piernierPointer = 2;
    let basePointer = 1;

    while(piernierPointer < array.length) {
        if(array[piernierPointer] == array[basePointer]) {
            piernierPointer ++;
        } else {
            array[basePointer] = array[piernierPointer];
            basePointer ++;
            piernierPointer ++;
        }
    }



    return basePointer;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
