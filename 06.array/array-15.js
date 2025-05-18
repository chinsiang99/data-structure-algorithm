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

// note that the time complexity for this is actually O(n), the space complexity is also O(n) because we havea set data structure
console.log(twoSum(array, target))

console.log("--- revision starts here ---")
let targethehe = 7
let newSet = new Set([array[0]])
let flag = false
for(let i = 1; i < array.length; i++){
    let diff = targethehe - array[i]
    if(newSet.has(diff)){
        flag = true
    }

    newSet.add(array[i])
}

console.log(flag)