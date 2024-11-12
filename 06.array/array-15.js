// two sum problem
let array = [2, 6, 5, 8, 11]
let target = 13

function twoSum(arr, target){
    let set = new Set()
    for(let i = 0; i < arr.length; i++){
        if(set.has(target - arr[i])){
            return true
        }
        set.add(arr[i])
    }
    return false
}

console.log(twoSum(array, target))