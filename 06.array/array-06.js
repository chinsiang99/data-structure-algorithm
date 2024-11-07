// left rotate array by k places

// left rotate array by 1 => time complexity O(n)
let arrayNumbers = [1, 2, 3, 4, 5]

for(let i = 0; i < arrayNumbers.length - 1; i++){
    [arrayNumbers[i], arrayNumbers[i+1]] = [arrayNumbers[i+1], arrayNumbers[i]]
}

console.log(arrayNumbers)

// brute force solution to rotate the array by n
let arrayNumbers2 = [1, 2, 3, 4, 5]
function leftRotateByNPlaces(arr, n){
    let realRotateValue = n % arr.length
    let temp = []
    for(let i = 0; i < realRotateValue; i++){
        temp.push(arr[i])
    }

    for(let i = realRotateValue; i < arr.length; i++){
        arr[i-realRotateValue] = arr[i]
    }

    for(let i = arr.length - realRotateValue; i < arr.length; i++){
        arr[i] = temp[i - realRotateValue - 1]
    }
}

console.log("original", arrayNumbers2)
leftRotateByNPlaces(arrayNumbers2, 2)
console.log("rotated", arrayNumbers2)