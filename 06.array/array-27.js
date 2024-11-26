// count subarray sum equals k

let k = 3
let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3, 1, 2, 3]
// we should have 8

function method(arr, k){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        for(let j = i; j < arr.length; j++){
            sum += arr[j]
            if(sum === k){
                count++
            }
        }
    }
    return count
}
// note that the time complexity would be O(n^2)
console.log(method(arr, k))


// now we try to think about prefix sum
function method2(arr, k){
    let prefixSum = 0
    let count = 0
    let newMap = new Map([[0, 1]])
    for(let i = 0; i < arr.length; i++){
        prefixSum = prefixSum + arr[i]
        let difference = prefixSum - k

        if(newMap.has(difference)){
            count = count + newMap.get(difference)
        }

        newMap.set(prefixSum, newMap.get(prefixSum) ? newMap.get(prefixSum) + 1 : 1)
    }

    return count
}

console.log(method2(arr, k))