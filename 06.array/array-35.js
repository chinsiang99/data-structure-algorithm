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

// time complexity is O(n^2), space complexity is O(1)
console.log(method1(arr, n))

// using mapping approach
function method2(arr, n){
    let frequencyMap = new Map();
    let repeating = -1
    let missing = -1
    for (let i = 1; i <= n; i++) {
      frequencyMap.set(i, 0);
    }

    for(let i = 0; i < n; i++){
        frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1)
    }

    for(let [key, value] of frequencyMap){
        if(value === 0){
            missing = key
        }

        if(value > 1){
            repeating = key
        }
    }

    return [repeating, missing]
}

// time complexity is O(n), space complexity is O(n)
console.log(method2(arr, n))

// using maths to solve the problem
function method3(arr, n){
    // we need to build up two equation
    // S - SN = x - y
    // S2 - S2N = 

    // need to memorize the solution, because it is maths
    let SN = (n * (n + 1)) / 2
    let S2N = (n * (n+1) * (2 * n + 1)) / 6
    let S = 0
    let S2 = 0
    for(let i = 0; i < n; i++){
        S += arr[i]
        S2 += arr[i] * arr[i]
    }

    let firstValue = S - SN // x - y
    let secondValue = S2 - S2N
    secondValue = secondValue / firstValue // x + y

    let x = (firstValue + secondValue) / 2
    let y = x - firstValue

    return [x, y]
}

console.log(method3(arr, n))