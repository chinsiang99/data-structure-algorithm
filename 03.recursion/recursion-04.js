// multiple recursion calls

// fibonacci numbers
// 0 1 1 2 3 5 8 13 21
// now we want to get the value
// if it is fibonacci(2) => 1
// if it is fibonacci(4) => 3

let n = 4
// this is iteration way and it is actually the iterative approach, it has time complexity of n, and constant for space
function fibonacci1(n){
    if(n <= 1){
        return n
    }

    let a = 0
    let b = 1
    let result
    for(let i = 2; i <=n; i++){
        result = a + b
        a = b 
        b = result
    }
    return result
}

console.log(fibonacci1(4))

// below method is actually dynamic programming way, but it has time complexity of n and space complexity of n
function fibonacci2(n){
    let arr = [0, 1]
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}

console.log(fibonacci2(4))

// below is the way to use recursive to do it, but it has 2^n time complexity, which is very bad
function fibonacci3(n){
    if(n <= 1){
        return n
    }

    return fibonacci3(n-1) + fibonacci3(n-2)
}

console.log(fibonacci3(4))

// below is a better approach as there is a memoization technique being used here, therefore the time complexity became n
function fibonacci4(n, memo = new Map()){
    if(n <= 1){
        return n
    }

    if (memo.has(n)){
        return memo.get(n)
    }

    memo.set(n, fibonacci4(n-1, memo) + fibonacci4(n-2, memo))

    return memo.get(n)
}

console.log(fibonacci4(4))