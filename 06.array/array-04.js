// check whether an array is sorted
let arrayNumbers = [1, 2, 3, 3, 2, 4, 6, 2, 1]

let isSorted = true
for(let i = 0; i < arrayNumbers.length - 1; i++){
    if(arrayNumbers[i] > arrayNumbers[i + 1]){
        isSorted = false
    }
}
console.log(isSorted)

let arrayNumbers2 = [1, 2, 3, 4, 5]

let isSorted2 = true
for(let i = 0; i < arrayNumbers2.length - 1; i++){
    if(arrayNumbers2[i] > arrayNumbers2[i + 1]){
        isSorted2 = false
    }
}
console.log(isSorted2)
