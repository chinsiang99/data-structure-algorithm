// removing duplicates in a sorted array
let arrayNumbers = [1, 1, 2, 3, 4, 5, 6, 7, 8, 8]
let set = new Set()
for(let i = 0; i < arrayNumbers.length; i++){
    set.add(arrayNumbers[i])
}
// it has a time complexity of O(n + n), space complexity of n
console.log(Array.from(set))

// removing duplicates in a sorted array (in-place) // better approach (using pointer) // getting how many unique indexes are there
let uniqueIndex = 0
for(let i = 1; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] !== arrayNumbers[uniqueIndex]){
        uniqueIndex++
        arrayNumbers[uniqueIndex] = arrayNumbers[i]
    }
}

console.log(uniqueIndex + 1)

// removing duplicates, but only show them infront, others all showing 0
let arrayNumbers2 = [1, 2, 3, 4, 4, 5, 6, 6]
let uniqueIndex2 = 0
for(let i = 1; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] !== arrayNumbers2[uniqueIndex2]){
        uniqueIndex2++
        arrayNumbers2[uniqueIndex2] = arrayNumbers2[i]
    }
    arrayNumbers2[i] = 0
}
console.log(arrayNumbers2, "helo?")


console.log("--- revision starts here ---")

arrayNumbers2 = [1, 1, 2, 3, 4, 4, 5, 6, 6]

let unique = 0

for(let i = 1; i < arrayNumbers2.length; i++){
    if(arrayNumbers2[i] !== arrayNumbers2[unique]){
        unique++
        arrayNumbers2[unique] = arrayNumbers2[i]
    }
    arrayNumbers2[i] = 0
}

console.log(arrayNumbers2)


removeDuplicate = [1, 1, 2, 3, 4]
// removeDuplicate = [1, 3, 5, 7, 9]

let uniqueTo = 0
for(let j = 1; j < removeDuplicate.length; j++){
    if(removeDuplicate[uniqueTo] !== removeDuplicate[j]){
        uniqueTo++
        removeDuplicate[uniqueTo] = removeDuplicate[j]
    }

}

console.log(uniqueTo + 1, removeDuplicate)
