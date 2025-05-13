// problem moving all the zeros to the most behind
let arrayNumbers = [1, 2, 5, 0, 3, 4, 0, 0, 2, 1, 0]
let index = -1
let nonZeroArray = []
for(let i = 0; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] !== 0){
        nonZeroArray.push(arrayNumbers[i])
    }
}

for(let i = 0; i < arrayNumbers.length; i++){
    if(i < nonZeroArray.length){
        arrayNumbers[i] = nonZeroArray[i]
    }else{
        arrayNumbers[i] = 0
    }
}

// the time complexity is O(2n), space complexity is O(n)
console.log(arrayNumbers)

// two pointer approach - a betterway to solve this
let arrayNumbers2 = [0, 1, 2, 3, 0, 4, 5, 0, 0, 6, 7, 8, 0, 0, 9]
let zeroIndex = -1
for(let i = 0; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] === 0){
        zeroIndex = i
        break;
    }
}

if(zeroIndex === -1) console.log("yo")

for(let i = zeroIndex + 1; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] !== 0){
        [arrayNumbers2[i], arrayNumbers2[zeroIndex]] = [arrayNumbers2[zeroIndex], arrayNumbers2[i]]
        zeroIndex++
    }
}

// this has a time complexity og O(n)
console.log(arrayNumbers2)


console.log("--- revision starts here ---")

let array = [1, 2, 5, 0, 3, 4, 0, 0, 2, 1, 0]

let pointer = 0
for(let i = 0; i < array.length; i++){
    if(array[i] !== 0){
        array[pointer] = array[i]
        pointer++
    }
}

for(let i = pointer; i < array.length; i++){
    array[i] = 0
}

console.log(array)