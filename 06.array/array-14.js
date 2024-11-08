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

console.log(bruteForce(array, 3))
