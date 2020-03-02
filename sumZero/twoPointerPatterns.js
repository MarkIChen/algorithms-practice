/*jshint esversion: 6*/

function sumZero(array) {
    var leftPointer = 0;
    var rightPointer = array.length - 1;

    while(leftPointer < rightPointer) {
        sum = array[leftPointer] + array[rightPointer];

        if(sum == 0) {
            console.log([array[leftPointer], array[rightPointer]]);
            leftPointer += 1;
            rightPointer -= 1;
        } else if(sum < 0) {
            leftPointer += 1;
        } else {
            rightPointer -= 1;
        }
    }
}

sumZero([-3, -2, 0, 1, 2, 3]);
