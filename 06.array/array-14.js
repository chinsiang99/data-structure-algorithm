// longest subarray with sum k [positives]
// subarray means contigous part of the array
// example: i want to have a sum of 3, with the longest subarray
// we need to get the length of the longest to get the sum of 3

let array = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]

// brute force
function bruteForce(arr, k){
    let maximumCount = 0
    for(let i = 0; i < arr.length; i++){
        let maximumCurrent = 0
        let initialValue = arr[i]
        if(initialValue <= k){
            maximumCurrent = 1
            for(let j = i + 1; j < arr.length; j++){
                if(initialValue + arr[j] <= k){
                    maximumCurrent++
                    initialValue += arr[j]
                }else{
                    break;
                }
            }
        }
        if(maximumCurrent > maximumCount){
            maximumCount = maximumCurrent
        }
    }
    return maximumCount
}

// time complexity is O(n^2)
console.log(bruteForce(array, 3))

array = [0, 1, -1, 2, 3, -2, 3, 0, 4];

function mapping(arr, k){
    let map = new Map()
    let cumulativeSum = 0
    let maxLength = 0
    for(let i = 0; i < arr.length; i++){
        cumulativeSum = cumulativeSum + arr[i]
        if(cumulativeSum === k){
            maxLength = i + 1
        }
        if(map.has(cumulativeSum - k)){
            // console.log("hello", map.get(cumulativeSum - k))
            maxLength = Math.max(maxLength, i - map.get(cumulativeSum - k))
        }
        if(!map.has(cumulativeSum)){
            map.set(cumulativeSum, i)
        }
    }
    // console.log(map)
    return maxLength
}

// time complexity is O(n)
console.log(mapping(array, 3))

console.log("--- revision starts here ---")

array = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]

let mapped = new Map()
let cumulativeNumber = 0
let target = 1
let length = 0
for(let i = 0; i < array.length; i++){
    cumulativeNumber += array[i]

    if(cumulativeNumber === target){
        length = i + 1
    }

    let diff = cumulativeNumber - target

    if(mapped.has(diff)){
        length = Math.max(length, i - mapped.get(diff))
    }

    if(!mapped.has(cumulativeNumber)){
        mapped.set(cumulativeNumber, i)
    }
}

console.log(length)