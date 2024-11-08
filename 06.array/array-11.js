// finding missing number

let arr = [1, 2, 4, 5, 6]
// do this if the array is sorted
function findMissingNumber(arr){
    let missingNumber = -1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i + 1){
            missingNumber = i + 1
            break;
        }
    }
    return missingNumber
}

console.log(findMissingNumber(arr))

/**
 * Approach: Sum Formula
 * 
 * Calculate the expected sum of numbers from 1 to n using the formula:
 * expectedSum = n * (n + 1) / 2
 * 
 * 1. Calculate the expected sum for numbers from 1 to n.
 * 2. Calculate the actual sum of the elements in the array.
 * 3. The missing number is the difference between the expected sum and the actual sum.
 */ // note that this is assume, the numbers are only 1 by 1

let array = [7, 8, 2, 3, 4, 5, 6, 1, 9, 1, 2, 3, 4, 5]
// if it is not sorted
function findMissingNumber2(arr){
    let comparisonArray = new Array(arr.length).fill(0)

    for(let i = 0; i < arr.length; i++){
        comparisonArray[arr[i]] = comparisonArray[arr[i]] + 1
    }

    let missingNumber = -1
    for(let i = 1; i < arr.length; i++){
        if(comparisonArray[i] === 0){
            missingNumber = i
            break;
        }
    }

    return missingNumber
}

console.log(findMissingNumber2(array))