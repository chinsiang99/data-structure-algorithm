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
    // S2 - S2N = x^2 - y^2 = (x-y)(x+y)

    // need to memorize the solution, because it is maths
    let SN = (n * (n + 1)) / 2
    let S2N = (n * (n +1 ) * (2 * n + 1)) / 6
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

// time complexity is O(n), space complexity is O(1)
console.log(method3(arr, n))

// this is very advanced and needed to be revised man and it is super efficient, please do some revision on this !!!!!
function method4(arr, n){
    let totalXOR = 0

    for(let i = 1; i <= n; i++){
        totalXOR ^= arr[i - 1]
        totalXOR ^= i
    }

    // now we will try to get the difference rightmost bit set to 1, so that we could split them
    // we use the difference is because we already know that there will be left two value, one is missing, one is repeating, in the totalXOR, we know that it is actually the repeating ^ missing one, therefore we can assume that the rightmost set bit is actually the difference between them, so we can divide them into groups and try to make it
    let rightMostSetBit = totalXOR & -totalXOR

    // initiate, because we knew that we have two variable, one repeating, one missing
    let x = 0, y = 0
    // for(let num of arr){
    //     if(rightMostSetBit & num){
    //         x ^= num
    //     }else{
    //         y ^= num
    //     }
    // }

    for(let i = 1; i <= n; i++){
        if(rightMostSetBit & arr[i-1]){
            x ^= arr[i-1]
        }else{
            y ^= arr[i-1]
        }

        if(rightMostSetBit & i){
            x ^= i
        }else{
            y ^= i
        }
    }

    // before returning, we need to verify it whether it is the repeating or the missing

    let missing = true
    for(let i = 0; i < n; i++){
        if(arr[i] === x){
            missing = false
            break;
        }
    }

    if(missing){
        return [y, x]
    }else{
        return [x, y]
    }
}

// time complexity is O(n = n + n), space complexity is O(1)
console.log(method4(arr, n))