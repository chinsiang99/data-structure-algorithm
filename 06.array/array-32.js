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