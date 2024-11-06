// left rotate array by k places

// left rotate array by 1 => time complexity O(n)
let arrayNumbers = [1, 2, 3, 4, 5]

for(let i = 0; i < arrayNumbers.length - 1; i++){
    [arrayNumbers[i], arrayNumbers[i+1]] = [arrayNumbers[i+1], arrayNumbers[i]]
}

console.log(arrayNumbers)