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