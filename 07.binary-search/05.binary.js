// problem: search in rotated sorted array (inside might have duplicates)
// search it whether it exists or not, no need to return the index

let arr = [7, 8, 9, 1, 2, 3, 4, 5]
let target = 4

// performing linear search
function method1(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }

    return false
}

console.log(method1(arr, target))

function method2(arr, target){
    let low = 0
    let high = arr.length - 1

    let answer = false
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] === target){
            return true
        }

        if(arr[mid] === arr[low] === arr[high]){
            low += 1
            high -= 1
            continue
        }

        // sorted left
        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }else{
            // sorted right
            if(arr[mid] <= target && target <= arr[high]){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
    }

    return answer
}

// time complexity O(n)
console.log(method2(arr, target))