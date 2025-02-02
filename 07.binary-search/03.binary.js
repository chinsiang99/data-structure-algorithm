// problem, find the first and last occurance of x
// note that the array is sorted

let arr = [2, 4, 6, 8, 8, 8, 11, 13, 13]

let target = 13
function method1(arr, target){
    let first = -1, last = -1

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            if(first === -1){
                first = i
                last = i
            }else{
                last = i
            }
        }
    }

    return [first, last]
}

// time complexity is O(n)
console.log(method1(arr, target))

function method2(arr, target){
    // implement lower bound and upper bound to get the index
    let first = -1
    let last = -1

    let low = 0
    let high = arr.length - 1

    // implement lower bound
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] >= target){
            first = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    if(first === -1 || arr[first] !== target){
        return [-1, -1]
    }

    // implement upper bound (this is different because we are grabbing the one that is same only)
    low = 0
    high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] > target){
            high = mid - 1
        }else if(arr[mid] === target) {
            last = mid
            low = mid + 1
        }else{
            low = mid + 1
        }
    }

    return [first, last]
}

// time complexity O(2 * logn)
console.log(method2(arr, target))