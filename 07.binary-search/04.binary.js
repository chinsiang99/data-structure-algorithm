// problem: search in rotated sorted array (inside have only unique elements)

let arr = [7, 8, 9, 1, 2, 3, 4, 5]
let target = 3

// perform linear search
function method1(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }

    return -1
}

// time complexity O(n)
console.log(method1(arr, target))

// due to because it is a search and it has the keyword sorted, we can use binary search to do it
// lets analyze this
function method2(arr, target){
    let answer = -1
    let low = 0
    let high = arr.length - 1

    while(low <= high){
        mid = Math.floor((low + high) / 2)
        if(arr[mid] === target){
            return mid
        }

        //left part sorted
        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }else{
            // right part sorted
            if(arr[mid] <= target && target <= arr[high]){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
    }

    return answer
}

console.log(method2(arr, target))