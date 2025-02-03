// problem: minimum in rotated sorted array (unique elements)

let arr = [4, 5, 6, 7, 0, 1, 2]

function method1(arr){
    let answer = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(answer > arr[i]){
            answer = arr[i]
        }
    }

    return answer
}

// time complexity is O(n)
console.log(method1(arr))

// perform binary search to solve this problem
// note that sorted half may not be the answer
// so we will always get the sorted part's lowest value then try to compare, then eleminate the sorted part
function method2(arr){
    let low = 0
    let high = arr.length - 1
    let answer = Number.MAX_SAFE_INTEGER

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[low] <= arr[mid]){
            // left part is sorted
            answer = Math.min(arr[low], answer)
            low = mid + 1
        }else{
            answer = Math.min(answer, arr[mid])
            high = mid - 1
        }
    }

    return answer
}

// time complexity is O(logn )
console.log(method2(arr))