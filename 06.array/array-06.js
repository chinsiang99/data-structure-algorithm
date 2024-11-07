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

// the time complexity is actually O(n)
// the space complexity is actually O(realRotateValue)

console.log("original", arrayNumbers2)
leftRotateByNPlaces(arrayNumbers2, 2)
console.log("rotated", arrayNumbers2)

let arrayNumbers3 = [1, 2, 3, 4, 5]
// the method of it is actually doing with reversing
function leftRotateByNPlacesOptimal(arr, n){
    let rotateRealValue = n % arr.length
    reverseNumber(arr, 0, rotateRealValue - 1)
    reverseNumber(arr, rotateRealValue, arr.length - 1)
    reverseNumber(arr, 0, arr.length - 1)
}

function reverseNumber(arr, first, last){
    while(first < last && last > first){
        [arr[first], arr[last]] = [arr[last], arr[first]]
        first++
        last--
    }
}

// time complexity of this is actually O(2n) slightly higher than before but O(1) for space complexity
console.log("original 2", arrayNumbers3)
leftRotateByNPlacesOptimal(arrayNumbers3, 2)
console.log("rotated 2", arrayNumbers3)