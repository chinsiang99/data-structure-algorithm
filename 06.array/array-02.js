// second largest number in an array

let arrayNumbers = [1, 2, 4, 5, 3, 2, 7, 8, 8, 7]

// brute force (sorting) => having time complexity of o(n log n + n)
let sortedArray = arrayNumbers.sort((a,b) => a-b)
console.log(sortedArray)
for(let i = arrayNumbers.length - 2; i >=0; i--){
    if(arrayNumbers[i] !== arrayNumbers[arrayNumbers.length - 1]){
        console.log(arrayNumbers[i])
        break;
    }
}

// better approach (time complexity n + n)
let arrayNumbers2 = [1, 2, 3, 3, 2, 5, 6, 3, 8, 3, 5]
let largest = -1
for(let i = 0; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] > largest){
        largest = arrayNumbers2[i]
    }
}
let secondLargest = -1
for(let i = 0; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] > secondLargest && arrayNumbers2[i] < largest){
        secondLargest = arrayNumbers2[i]
    }
}

console.log(secondLargest)

// optimal/best approach (it took n time complexity only instead of 2n)

let arrayNumbers3 = [6, 6, 6, 6, 2, 4, 5, 2, 8, 6, 4, 7]

let highest = arrayNumbers3[0]
let secondHighest = -1
for(let i = 1; i < arrayNumbers3.length; i++){
    if(arrayNumbers3[i] > highest){
        secondHighest = highest
        highest = arrayNumbers3[i]
    }else if(arrayNumbers3[i] > secondHighest && arrayNumbers3[i] < highest){
        secondHighest = arrayNumbers3[i]
    }
}
console.log(secondHighest)


console.log("--- revision starts here ---")

arrayNumbers = [1, 2, 4, 5, 3, 2, 7, 8, 8, 7, 9, 9]
let largestNumber = arrayNumbers[0]
let secondLargestNumber = -1
for(let i = 1; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] > secondLargestNumber){
        if(arrayNumbers[i] > largestNumber){
            secondLargestNumber = largestNumber
            largestNumber = arrayNumbers[i]
        }else{
            secondLargestNumber = arrayNumbers[i]
        }
    }
}

console.log(largestNumber, secondLargestNumber)

let leftPointer = 0
let rightPointer = arrayNumbers.length - 1
let largestValue = Math.max(arrayNumbers[leftPointer], arrayNumbers[rightPointer])
let secondLargestValue = Math.min(arrayNumbers[leftPointer], arrayNumbers[rightPointer])
leftPointer++
rightPointer--
while(leftPointer <= rightPointer){
    if(arrayNumbers[leftPointer] > secondLargestValue){
        if(arrayNumbers[leftPointer] > largestValue){
            secondLargestValue = largestValue
            largestValue = arrayNumbers[leftPointer]
        }else if(arrayNumbers[leftPointer] !== largestValue){
            secondLargestValue = arrayNumbers[leftPointer]
        }
    }

    if(arrayNumbers[rightPointer] > secondLargestValue){
        if(arrayNumbers[rightPointer] > largestValue){
            secondLargestValue = largestValue
            largestValue = arrayNumbers[rightPointer]
        }else if(arrayNumbers[rightPointer] !== largestValue){
            secondLargestValue = arrayNumbers[rightPointer]
        }
    }
    leftPointer++
    rightPointer--
}

if(largest === secondLargest){
    console.log(-1)
}
console.log(largestValue, secondLargestValue)