// problem: implement lower bound
// the smallest index such that the number of that index is greater than or equal to given number

let arr = [3, 5, 8, 15, 19]
let target = 4

function method1(arr, target){
    let answer = arr.length
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= target){
            answer = i
            break;
        }
    }

    return answer
}

// time complexity is O(n)
console.log(method1(arr, target))

target = 20
function method2(arr, target){

    let low = 0
    let high = arr.length - 1
    let answer = arr.length
    
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] >= target){
            answer = mid
            high = mid - 1
        }else if(arr[mid] < target){
            low = mid + 1
        }
    }

    return answer
}

// time complexity is O(n)
console.log(method2(arr, target))

