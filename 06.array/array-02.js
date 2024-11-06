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

