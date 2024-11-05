// selection sort
// select minimums and swap
// we can observe that it is basically swap minimum to 0 index

let newArray = [1, 2, 6, 7, 3, 4, 5]
function selectionSortAscending(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minimumIndex = i
        // get the minimum index that has the minimum value
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minimumIndex]){
                minimumIndex = j
            }
        }

        // swap the index with minimum value to the first
        if(minimumIndex !== i){
            [arr[minimumIndex], arr[i]] = [arr[i], arr[minimumIndex]]
        }
    }
}

selectionSortAscending(newArray)
console.log(newArray)

function selectionSortDescending(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let biggestIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                biggestIndex = j
            }
        }
        // swap
        if(biggestIndex !== i){
            [arr[i], arr[biggestIndex]] = [arr[biggestIndex], arr[i]]
        }
    }
}

selectionSortDescending(newArray)

console.log(newArray)

// both time complexity is O(n)