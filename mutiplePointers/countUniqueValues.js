/*jshint esversion: 6*/

function countUniqueValues(array){
    if(array.length === 0)    return 0;
    // To scrutinize the whole array to find the unique number.
    let piernierPointer = 0;
    // To store the unique nunber in the same array.
    let basePointer = 0;

    while(piernierPointer < array.length) {
        if(array[piernierPointer] == array[basePointer]) {
            piernierPointer ++;
        } else {
            // base pointer has to be added before inserting into the array.
            basePointer ++;
            array[basePointer] = array[piernierPointer];
            piernierPointer ++;
        }
        console.log(array);

    }
    return basePointer + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
