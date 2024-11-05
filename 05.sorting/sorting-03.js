// insertion sort
// it actually work one item at a time, for example for this
// first we see 1, 2
// next we see 1, 2, 2
// next we will see 1, 2, 2, 1 => which makes it to 1, 1, 2, 2
// next we will see 1, 1, 2, 2, 5 ... repeat
let newArray = [1, 2, 2, 1, 5, 4, 7, 2, 3]
function insertionSortAsc(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j >= 1; j--){
            if(arr[j] < arr[j - 1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
}

insertionSortAsc(newArray)
console.log(newArray)

function insertionSortDesc(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j >= 1; j--){
            if(arr[j] > arr[j - 1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
}

insertionSortDesc(newArray)
console.log(newArray)