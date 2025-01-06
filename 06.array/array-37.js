// problem reverse pairs
// it is actually same with previous question, but now, instead left > 2 * right

let arr = [40, 25, 19, 12, 9, 6, 2]

function method1(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > 2 * arr[j]){
                count++
            }
        }
    }

    return count
}

// time complexity is O(n^2)
console.log(method1(arr))

// function mergeSort(arr, low, high){
//     let count = 0
//     if(low < high){
//         let mid = Math.floor((low + high) / 2)

//         count += mergeSort(arr, low, mid)
//         count += mergeSort(arr, mid + 1, high)

//         count += merge(arr, low, mid, high)
//     }

//     return count
// }

// function merge(arr, low, mid, high){
//     let count = 0
//     let result = []
//     let i = low
//     let j = mid + 1

//     while(i <= mid && j <= high){
//         if(arr[i] <= arr[j]){
//             result.push(arr[i])
//             i++
//         }else{
//             if(arr[i] > (2 * arr[j])){
//                 count += mid - i + 1
//             }
//             result.push(arr[j])
//             j++
//         }
//     }

//     while(i <= mid){
//         result.push(arr[i])
//         i++
//     }

//     while(j <= high){
//         result.push(arr[j])
//         j++
//     }

//     for(let i = 0; i < result.length; i++){
//         arr[low + i] = result[i]
//     }

//     return count
// }

// function method2(arr){
//     return mergeSort(arr, 0, arr.length - 1)
// }

// console.log(arr)
// console.log(method2(arr))
// console.log(arr)


function mergeSort(arr, low, high) {
    let count = 0;
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        count += mergeSort(arr, low, mid);
        count += mergeSort(arr, mid + 1, high);
        count += merge(arr, low, mid, high);
    }
    return count;
}

function merge(arr, low, mid, high) {
    let count = 0;
    let result = [];
    
    // Count reverse pairs first
    let j = mid + 1;
    for (let i = low; i <= mid; i++) {
        while (j <= high && arr[i] > 2 * arr[j]) {
            j++;
        }
        count += j - (mid + 1);
    }
    
    // Regular merge process
    let i = low;
    j = mid + 1;
    
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }
    
    while (i <= mid) {
        result.push(arr[i]);
        i++;
    }
    
    while (j <= high) {
        result.push(arr[j]);
        j++;
    }
    
    for (let i = 0; i < result.length; i++) {
        arr[low + i] = result[i];
    }
    
    return count;
}

function method2(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

console.log(arr)
console.log(method2(arr))
console.log(arr)