/*jshint esversion: 6*/

function countUniqueValues(array){
    var count = 0;

    var pointer = 0;
    var currentNumber = array[pointer];
    while(pointer < array.length) {
        pointer += 1;

        if(array[pointer] != currentNumber) {
            currentNumber = array[pointer];
            count ++;
        }
    }

    return count;
}

console.log(countUniqueValues([-2, -1, 0, 1, 2]));
