// second smallest number in an array

let arrayNumbers = [1, 1, 2, 5, 6, 3, 5, 7, 8, 4]

let smallest = arrayNumbers[0]
let secondSmallest = Number.MAX_SAFE_INTEGER
for(let i = 1; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] < smallest){
        secondSmallest = smallest
        smallest = arrayNumbers[i]
    }else if (arrayNumbers[i] < secondSmallest && arrayNumbers[i] > smallest){
        secondSmallest = arrayNumbers[i]
    }
}
console.log(secondSmallest)

console.log("--- revision starts here ---")

arrayNumbers = [1, 1, 2, 5, 6, 3, 5, 7, 8, 4]

let smallestValue = Math.min(arrayNumbers[0], arrayNumbers[arrayNumbers.length - 1])
let secondSmallestValue = Math.max(arrayNumbers[0], arrayNumbers[arrayNumbers.length - 1])
if(smallestValue === secondSmallestValue){
    secondSmallestValue = -1
}
let leftPointer = 1
let rightPointer = arrayNumbers.length - 2
while(leftPointer <= rightPointer){
    if(arrayNumbers[leftPointer] < secondSmallestValue){
        if(arrayNumbers[leftPointer] < smallestValue){
            secondSmallestValue = smallestValue
            smallestValue = arrayNumbers[leftPointer]
        }else if(arrayNumbers[leftPointer] !== smallestValue){
            secondSmallestValue = arrayNumbers[leftPointer]
        }
    }

    if(arrayNumbers[rightPointer] < secondSmallestValue){
        if(arrayNumbers[rightPointer] < smallestValue){
            secondSmallestValue = smallestValue
            smallestValue = arrayNumbers[rightPointer]
        }else if(arrayNumbers[rightPointer] !== smallestValue){
            secondSmallestValue = arrayNumbers[rightPointer]
        }
    }
    leftPointer++
    rightPointer--
}

console.log(smallestValue, secondSmallestValue)