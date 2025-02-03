// problem: search in rotated sorted array (inside might have duplicates)
// search it whether it exists or not, no need to return the index

let arr = [7, 8, 9, 1, 2, 3, 4, 5]
let target = 3

// performing linear search
function method1(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }

    return false
}


function method2(arr, target){

}