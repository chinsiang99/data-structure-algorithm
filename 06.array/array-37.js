// problem reverse pairs
// it is actually same with previous question, but now, instead left > 2 * right

let arr = [40, 25, 19, 12, 9, 6, 2]

function method1(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > 2 * arr[j]){
                count++
            }
        }
    }

    return count
}

// time complexity is O(n^2)
console.log(method1(arr))