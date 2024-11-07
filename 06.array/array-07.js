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