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

// time complexity will be O(n)

// this is the best one because the best case is simply O(n)
function insertionSortBest(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i
        while(j >=0 && arr[j - 1] > arr[j]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
        }
    }
}

insertionSortBest(newArray)
console.log(newArray)

console.log("--- revision starts here ---")

newArray = [1, 2, 2, 1, 5, 4, 7, 2, 3]
function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j > 0; j--){
            if(arr[j] < arr[j - 1]){
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }else{
                break
            }
        }
    }

    console.log(arr)
}

insertionSort(newArray)

newArray = [1, 2, 2, 1, 5, 4, 7, 2, 3]
function insertionSortHello(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        let previousIndex = i - 1

        while(previousIndex >= 0 && current < arr[previousIndex]){
            arr[previousIndex + 1] = arr[previousIndex]
            previousIndex--
        }

        arr[previousIndex + 1] = current
    }
    console.log(arr)
}

insertionSortHello(newArray)