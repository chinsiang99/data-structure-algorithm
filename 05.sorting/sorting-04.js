// merge sort (sorting algo)
// divide and conquer method
// have a better time complexity

// below is sample mindset
// arr, 0, 0, 1
// 0, 3
// 1, 3, 2, 5

// arr, 0, 1  arr, 2, 3
// 1, 3       2, 5

// arr, 0, 0      arr, 1, 1      arr, 2, 2   arr, 3, 3
// 1              3              2,          5


let arrayNumbers = [1, 3, 2, 5]
let arrayNumbers2 = [6, 3, 2, 1, 3, 4, 5, 2]
function sortAsc(arr, low, high){
    if(low === high){
        return
    }
    let middle = Math.floor((low + high) / 2)
    sortAsc(arr, low, middle) 
    sortAsc(arr, middle + 1, high) 
    merge(arr, low, middle, high)
}

function merge(arr, low, mid, high){
    let leftIndex = low
    let rightFirstIndex = mid + 1
    let temporaryArray = []
    console.log("yoyoyo", leftIndex, rightFirstIndex)
    while(leftIndex <= mid && rightFirstIndex <= high){
        if(arr[leftIndex] <= arr[rightFirstIndex]){
            temporaryArray.push(arr[leftIndex])
            leftIndex++
        }else{
            temporaryArray.push(arr[rightFirstIndex])
            rightFirstIndex++
        }
    }

    while(leftIndex <= mid){
        temporaryArray.push(arr[leftIndex])
        leftIndex++
    }

    while(rightFirstIndex <= high){
        temporaryArray.push(arr[rightFirstIndex])
        rightFirstIndex++
    }

    for(let i = low; i <= high; i++){
        arr[i] = temporaryArray[i - low]
    }
}

sortAsc(arrayNumbers, 0, arrayNumbers.length - 1)
sortAsc(arrayNumbers2, 0, arrayNumbers2.length - 1)

console.log(arrayNumbers)
console.log(arrayNumbers2)

function sortDesc(arr, low, high){
    if(low === high){
        return
    }

    let middle = Math.floor((low + high) / 2)

    sortDesc(arr, low, middle)
    sortDesc(arr, middle+1, high)

    mergeDesc(arr, low, middle, high)
}

function mergeDesc(arr, low, mid, high){
    let temporaryArray = []
    let rightFirstIndex = mid + 1
    let leftFirstIndex = low

    while(leftFirstIndex <= mid && rightFirstIndex <= high){
        if(arr[leftFirstIndex] >= arr[rightFirstIndex]){
            temporaryArray.push(arr[leftFirstIndex])
            leftFirstIndex++
        }else{
            temporaryArray.push(arr[rightFirstIndex])
            rightFirstIndex++
        }
    }

    while(leftFirstIndex <= mid){
        temporaryArray.push(arr[leftFirstIndex])
        leftFirstIndex++
    }

    while(rightFirstIndex <= high){
        temporaryArray.push(arr[rightFirstIndex])
        rightFirstIndex++
    }

    for(let i = low; i <= high; i++){
        arr[i] = temporaryArray[i - low]
    }
}


sortDesc(arrayNumbers, 0, arrayNumbers.length - 1)
sortDesc(arrayNumbers2, 0, arrayNumbers2.length - 1)

console.log(arrayNumbers)
console.log(arrayNumbers2)

