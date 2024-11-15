// kadane's algorithm, maximum subarray sum

let array = [-2, -3, 4, -1, -2, 1, 5, -3, 2, 2]

function getMaxSubSum(arr){
    let maximum = 0
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        for(let j = i; j < arr.length; j++){
            sum = sum + arr[j]
            maximum = Math.max(sum, maximum)
        }
    }

    return maximum
}
// time complexity for this method is O(n^2), spcae complexity is O(1)
console.log(getMaxSubSum(array))

function kadaneAlgo(arr){
    let maximumSum = arr[0]
    let currentValue = 0
    for(let i = 0; i < arr.length; i++){
        if(currentValue + arr[i] < 0){
            currentValue = 0
        }else{
            currentValue = currentValue + arr[i]
            maximumSum = Math.max(currentValue, maximumSum)
        }
    }

    return maximumSum
}
// time complexity for this method is O(n), space complexity O(1)
console.log(kadaneAlgo(array))