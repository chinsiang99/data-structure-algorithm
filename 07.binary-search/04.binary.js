// problem: search in rotated sorted array (inside have only unique elements)

let arr = [7, 8, 9, 1, 2, 3, 4, 5]
let target = 1

// perform linear search
function method1(arr, target){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] === target){
            return i
        }
    }

    return -1
}

// time complexity O(n)
console.log(method1(arr, target))