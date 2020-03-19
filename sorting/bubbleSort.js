var arr = [37, 45, 29, 8, 1, 2, 3, 4];

function bubbleSort(arr) {
    let count = 0;
    for(let i=0; i< arr.length; i++) {
        let swapped = false;

        for(let j = 0 ;j< arr.length-1 ;j++){
            // console.log(arr);
            count ++;
            if(arr[j] > arr[j+1]) {
                swapped = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        if(swapped == false) break;
    }
    return arr;
}

console.log(bubbleSort(arr));

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return  arr;
// }
