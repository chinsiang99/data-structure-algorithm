// check whether an array is sorted
let arrayNumbers = [1, 2, 3, 3, 2, 4, 6, 2, 1]

let isSorted = true
for(let i = 0; i < arrayNumbers.length - 1; i++){
    if(arrayNumbers[i] > arrayNumbers[i + 1]){
        isSorted = false
        break;
    }
}
console.log(isSorted)

let arrayNumbers2 = [1, 2, 3, 4, 5]

let isSorted2 = true
for(let i = 0; i < arrayNumbers2.length - 1; i++){
    if(arrayNumbers2[i] > arrayNumbers2[i + 1]){
        isSorted2 = false
        break;
    }
}
console.log(isSorted2)



console.log("--- revision starts here ---")
arrayNumbers = [1, 2, 3, 3, 2, 4, 6, 2, 1]

let sortFlag = true
for(let i = 0; i < arrayNumbers.length - 1; i++){
    if(arrayNumbers[i] > arrayNumbers[i + 1]){
        sortFlag = false
        break;
    }
}
console.log(sortFlag)

let sortFlag2 = trye
