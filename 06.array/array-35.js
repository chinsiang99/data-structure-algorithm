// finding repeating and missing number

let arr = [4, 3, 6, 2, 1, 1]
let n = 6

// brute force solution
function method1(arr, n){
    let repeating = -1
    let missing = -1

    for(let i = 1; i <= n; i++){
        let count = 0
        for(let j = 0; j < n; j++){
            if(i === arr[j]){
                count++
            }
        }

        if(count > 1){
            repeating = i
        }

        if(count === 0){
            missing = i
        }
    }

    return [repeating, missing]
}

console.log(method1(arr, n))