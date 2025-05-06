// find the largest number

let arrayNumbers = [1, 3, 5, 7, 3, 4, 5]

// bruteForce // time complexity O(n)
let largest = arrayNumbers[0]
for(let i = 1; i < arrayNumbers.length - 1; i++){
    if(arrayNumbers[i] > largest){
        largest = arrayNumbers[i]
    }
}
console.log(largest)

console.log("--- revision starts here ---")

// find the largest number

arrayNumbers = [1, 3, 5, 7, 3, 4, 5, 8, 10, 1]

let largestNumber = arrayNumbers[0]
for(let i = 1; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] > largestNumber){
        largestNumber = arrayNumbers[i]
    }
}

console.log(largestNumber)

let leftPointer = 1
let rightPointer = arrayNumbers.length - 1
let largestValue = arrayNumbers[0]
while(leftPointer <= rightPointer){
    if(largestValue < Math.max(arrayNumbers[leftPointer], arrayNumbers[rightPointer])){
        largestValue = Math.max(arrayNumbers[leftPointer], arrayNumbers[rightPointer])
    }
    leftPointer++
    rightPointer--
}

console.log(largestValue)