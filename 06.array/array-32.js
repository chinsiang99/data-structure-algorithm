// count subarrays wit XOR as K
// we want to return the count

let arr = [4, 2, 2, 6, 4]
let k = 6

// meaning we should get
// [4, 2]
// [6]
// [2, 2, 6]
// [4, 2, 2, 4, 6]

function method(arr, target){
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        let xor = 0
        for(let j = i; j < arr.length; j++){
            if(xor ^ arr[j] === target){
                answer++
            }
        }
    }

    return answer
}

// time complexity is O(n^2), space complexity constant
console.log(method(arr, k))

// we need to visualize that x ^ k = xr
// therefore we in order to find the x, we need to both xor k
// meaning that xr ^ k
function method2(arr, k){
    let map = new Map([[0, 1]])
    let count = 0
    let xor = 0
    for(let i = 0; i < arr.length; i++){
        xor = xor ^ arr[i]

        let x = xor ^ k
        
        if(map.has(x)){
            count = count + map.get(x)
        }

        map.set(xor, (map.get(xor) || 0) + 1);
    }

    return count
}
// time complexity is  O(n), space complexity is O(n)
console.log(method2(arr, k))