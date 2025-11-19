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


let arrayL = [1, 3, 4, 5]
function findMissingNUmber3(arr, n){
    let sum = n * (n + 1) / 2
    for(let i = 0; i < arr.length; i++){
        sum = sum - arrayL[i]
    }
    return sum
}
// note that this is way better if the pattern is like that, we can utilize the algotithm to get it

console.log(findMissingNUmber3(arrayL, 5))

// now we will see another awesome approach which is using XOR

// remember that XOR mechanism is like 1 ^ 1 = 0 , 1 ^ 1 ^ 1 = 1, 2 ^ 2 = 0, 2 ^ 2 ^ 2 = 2

// this is better because we know thattere is a limit we can store inside a number, if we use the previous method, it has a higher sum, even out of bounds....

function findMissingNumberXOR(arrayL, n){
    let xor1 = 0
    let xor2 = 0
    for(let i = 0; i < n - 1; i++){
        xor1 = xor1 ^ arrayL[i]
        xor2 = xor2 ^ (i+1)
    }
    xor2 = xor2 ^ n

    let missingNumber = xor1 ^ xor2
    return missingNumber
}

console.log(findMissingNumberXOR(arrayL, 5))


console.log("--- revision starts here ---")

let n = 5 // note that this is 1 until 5 value
let arrayRevision = [1, 2, 4, 5]

function solution(arr, n){
    for(let i = 1; i <= n; i++){
        let missing = true
        for(let j = 0; j < arr.length; j++){
            if(i === arr[j]){
                missing = false
                break
            }
        }
        if(missing){
            console.log(i)
            break
        }
    }
}

// time complexity is n^2
// space complexity is constant
solution(arrayRevision, n)

// note that this solution is good when it is not sorted, if it is sorted, we can actually do it in linear way
function solution2(arr, n){
    let array = new Array(n + 1).fill(0)
    for(let i = 0; i < arr.length; i++){
        array[arr[i]] = 1
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] === 0){
            console.log(i)
        }
    }
}

// time complexity is 2n
// space complexity is n
solution2(arrayRevision, n)

let xor1 = 0
let xor2 = 0
for(let i = 0; i < arrayRevision.length; i++){
    xor1 = xor1 ^ arrayRevision[i]
    xor2 = xor2 ^ (i + 1)
}
xor2 = xor2 ^ n
let missingNumber = xor1 ^ xor2
console.log(missingNumber)

let sum = n * (n + 1) / 2 // please note that this is very important yo


// practise for a job application
console.log("-----for job application-----")

let summation = n * (n + 1) / 2

for(let i = 0; i < arrayRevision.length; i++){
    summation = summation - arrayRevision[i]
}
console.log(summation)


// now is the xor method
// we do the normal way first
// below is having n + m + array complexity and space complexity of additional one array
let helperArray = new Array(n + 1).fill(0)
for(let i = 0; i < arrayRevision.length; i++){
    helperArray[arrayRevision[i]] = 1 
}

for(let i = 1; i <= n; i++){
    if(helperArray[i] === 0){
        console.log("missing: ", i)
    }
}

// below is using the xor function
let missing = 0
for(let i = 0; i < arrayRevision.length; i++){
    missing = missing ^ arrayRevision[i]
}

for(let i = 1; i <= n; i++){
    missing = missing ^ i
}

console.log(missing, "missing")

// below is a wayyyy better approach
let finalMissing
for(let i = 0; i < arrayRevision.length; i++){
    finalMissing = finalMissing ^ arrayRevision[i]
    finalMissing = finalMissing ^ (i+1)
}

finalMissing = finalMissing ^ n

console.log(finalMissing, "yoyoyo hehe")