import Foundation

// Adding inout modifier to allow the function to alter the array.
func countUniqueValues(_ array: inout [Int]) -> Int {
    if(array.count == 0)  {
        return 0
    }
    
    var pierPointer = 0;
    var basePointer = 0;
    
    while(pierPointer < array.count) {
        if(array[pierPointer] == array[basePointer]) {
            pierPointer += 1
        } else {
            basePointer += 1
            array[basePointer] = array[pierPointer]
            pierPointer += 1
        }
    }
    
    return basePointer + 1
}

var array = [-2, -1, -1, 0, 1]
print(countUniqueValues(&array))

