// binary search
// note that it is efficient for sorted array!
let arr = [3, 4, 6, 7, 9, 12, 16, 17]
let target = 12

function method1(arr, target){
    let low = 0
    let high = arr.length - 1
    
    // we will keep looping when low <= high
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] > target){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    return -1
}

// time complexity is O(logn)
console.log(method1(arr, target))