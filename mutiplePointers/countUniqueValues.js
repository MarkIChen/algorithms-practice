/*jshint esversion: 6*/

function countUniqueValues(array){
    if(array.length === 0)    return 0;
    let piernierPointer = 0;
    let basePointer = 0;

    while(piernierPointer < array.length) {
        if(array[piernierPointer] == array[basePointer]) {
            piernierPointer ++;
        } else {
            basePointer ++;
            array[basePointer] = array[piernierPointer];
            piernierPointer ++;
        }
        console.log(array);

    }


    return basePointer + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
