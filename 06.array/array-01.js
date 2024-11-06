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
