// majority element 2
// problem: return elements that appear more than n/3 times

let array = [1, 1, 1, 3, 3, 2, 2, 2]
let n = 8

function method(arr, n){
    let newMap = new Map()
    let returnArray = []
    for(let i = 0; i < arr.length; i++){
        if(!newMap.has(arr[i])){
            newMap.set(arr[i], 1)
        }else{
            newMap.set(arr[i], newMap.get(arr[i]) + 1)
        }
    }

    for(let [key, value] of newMap){
        if(value > Math.floor(n/3)){
            returnArray.push(key)
        }
    }

    return returnArray
}

// time complexity is O(2n) and space complexity is O(n)
console.log(method(array, n))